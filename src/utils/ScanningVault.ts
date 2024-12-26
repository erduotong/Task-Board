// /src/utils/ScanningVaults.ts

import { App, TFile, moment as _moment } from "obsidian";
import { loadTasksJsonFromStore, writeTasksJsonToStore } from "./tasksCache";
import {
	scanFilterForFilesNFolders,
	scanFilterForTags,
} from "./FiltersVerifier";

import type TaskBoard from "main";
import { eventEmitter } from "src/services/EventEmitter";
import { priorityEmojis } from "src/interfaces/TaskItemProps";
import { readDataOfVaultFiles } from "./MarkdownFileOperations";
import store from "src/store";

export class ScanningVault {
	app: App;
	plugin: TaskBoard;
	tasks: any = { Pending: {}, Completed: {} };
	TaskDetected: boolean;

	constructor(app: App, plugin: TaskBoard) {
		this.app = app;
		this.plugin = plugin;
		this.TaskDetected = false;
	}

	async scanVaultForTasks() {
		const files = this.app.vault.getMarkdownFiles();
		this.tasks = { Pending: {}, Completed: {} }; // Reset task structure

		for (const file of files) {
			const scanFilters =
				this.plugin.settings.data.globalSettings.scanFilters;
			if (scanFilterForFilesNFolders(file, scanFilters)) {
				await this.extractTasksFromFile(file, this.tasks, scanFilters);
			}
		}

		this.saveTasksToFile();
		// Emit the event
		eventEmitter.emit("REFRESH_BOARD");
	}

	// Extract tasks from a specific file
	async extractTasksFromFile(file: TFile, tasks: any, scanFilters: any) {
		const fileNameWithPath = file.path;
		const fileContent = await readDataOfVaultFiles(
			this.plugin,
			fileNameWithPath
		);
		const lines = fileContent.split("\n");

		tasks.Pending[fileNameWithPath] = [];
		tasks.Completed[fileNameWithPath] = [];

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			if (line.startsWith("- [ ]") || line.startsWith("- [x]")) {
				const tags = extractTags(line);
				if (scanFilterForTags(tags, scanFilters)) {
					this.TaskDetected =
						line.startsWith("- [x]") || line.startsWith("- [ ]");
					const isCompleted = line.startsWith("- [x]");
					const title = extractTitle(line);
					const time = extractTime(line);
					const due = extractDueDate(line);
					const priority = extractPriority(line);
					const completionDate = extractCompletionDate(line);
					const body = extractBody(lines, i + 1);

					const task = {
						id: this.generateTaskId(),
						title,
						body,
						time,
						due,
						tags,
						priority,
						filePath: fileNameWithPath,
						completed: completionDate,
					};

					if (isCompleted) {
						tasks.Completed[fileNameWithPath].push(task);
					} else {
						tasks.Pending[fileNameWithPath].push(task);
					}
				} else {
					// console.log("The tasks is not allowed...");
				}
			}
		}
	}

	// Generate a unique ID for each task
	generateTaskId(): number {
		const array = new Uint32Array(1);
		crypto.getRandomValues(array);
		return array[0];
	}

	// Update tasks for an array of files (overwrite existing tasks for each file)
	async updateTasksFromFiles(files: (TFile | null)[]) {
		// Load the existing tasks from tasks.json once
		const oldTasks = await loadTasksJsonFromStore();
		const scanFilters =
			this.plugin.settings.data.globalSettings.scanFilters;

		for (const file of files) {
			if (file !== null) {
				const fileNameWithPath = file.path;
				const fileContent = await this.app.vault.read(file);
				const lines = fileContent.split("\n");
				const newPendingTasks: any[] = [];
				const newCompletedTasks: any[] = [];

				for (let i = 0; i < lines.length; i++) {
					const line = lines[i];
					if (line.startsWith("- [ ]") || line.startsWith("- [x]")) {
						const tags = extractTags(line);
						if (scanFilterForTags(tags, scanFilters)) {
							this.TaskDetected =
								line.startsWith("- [x]") ||
								line.startsWith("- [ ]");
							const isCompleted = line.startsWith("- [x]");
							const title = extractTitle(line);
							const time = extractTime(line);
							const priority = extractPriority(line);
							const completionDate = extractCompletionDate(line);
							const body = extractBody(lines, i + 1);
							let due = extractDueDate(line);
							if (
								!due &&
								this.plugin.settings.data.globalSettings
									.dailyNotesPluginComp
							) {
								const dueFormat =
									this.plugin.settings.data.globalSettings
										.dueDateFormat;
								const basename = file.basename;

								// Check if the basename matches the dueFormat using moment
								const moment =
									_moment as unknown as typeof _moment.default;
								if (
									moment(basename, dueFormat, true).isValid()
								) {
									due = basename; // If the basename matches the dueFormat, assign it to due
								} else {
									due = ""; // If not, assign an empty string
								}
							}

							const task = {
								id: this.generateTaskId(),
								title,
								body,
								time,
								due,
								tags,
								priority,
								filePath: fileNameWithPath,
								completed: completionDate,
							};

							if (isCompleted) {
								newCompletedTasks.push(task);
							} else {
								newPendingTasks.push(task);
							}
						} else {
							// console.log("The tasks is not allowed...");
						}
					}
				}

				if (oldTasks) {
					// Only replace the tasks for the specific file
					this.tasks.Pending = {
						...oldTasks.Pending, // Keep the existing tasks for other files
						[fileNameWithPath]: newPendingTasks, // Update only the tasks for the current file
					};

					this.tasks.Completed = {
						...oldTasks.Completed, // Keep the existing tasks for other files
						[fileNameWithPath]: newCompletedTasks, // Update only the tasks for the current file
					};
				}
			} else {
				console.warn("File is not valid...");
			}
		}

		this.saveTasksToFile();
	}

	// Save tasks to JSON file
	async saveTasksToFile() {
		await writeTasksJsonToStore(this.tasks);

		// Refresh the board only if any task has be extracted from the updated file.
		if (
			this.TaskDetected &&
			this.plugin.settings.data.globalSettings.realTimeScanning
		) {
			// eventEmitter.emit("REFRESH_COLUMN");
			store.refreshSignal.set(true);
			this.TaskDetected = false;
		}
	}
}

// New function to extract task body
export function extractBody(lines: string[], startLineIndex: number): string[] {
	const bodyLines = [];
	for (let i = startLineIndex; i < lines.length; i++) {
		const line = lines[i];

		if (line.trim() === "") {
			break;
		}

		// If the line has one level of indentation, consider it part of the body
		if (line.startsWith("\t") || line.startsWith("    ")) {
			//TODO : YOu cannot simply put hardcoded 4 spaces here for tab, it should be taken from the settings, how many spaces for one tab
			bodyLines.push(line);
		} else {
			// TODO : Initially i tried considering the next line without any indentation also as the body of the task, but if user has added multiple tasks right one after another then those should be different tasks.
			// bodyLines.push(`\t${line}`);
			break;
		}
	}
	return bodyLines;
}

// Extract title from task line
export function extractTitle(text: string): string {
	const timeAtStartMatch = text.match(
		/^- \[[x ]\]\s*\d{2}:\d{2} - \d{2}:\d{2}/
	);

	if (timeAtStartMatch) {
		// If time is at the start, extract title after the time and till the pipe symbol
		return text
			.replace(/^- \[[x ]\]\s*\d{2}:\d{2} - \d{2}:\d{2}\s*/, "")
			.split("|")[0]
			.trim();
	} else {
		// Default case: no time at start, extract title till the pipe symbol
		return text.includes("|")
			? text
					.split("|")[0]
					.replace(/^- \[[x ]\]\s*/, "")
					.trim()
			: text.replace(/^- \[[x ]\]\s*/, "").trim();
	}
}

// Extract time from task line
export function extractTime(text: string): string {
	// Check if time is at the start of the task
	const timeAtStartMatch = text.match(
		/^- \[[x ]\]\s*(\d{2}:\d{2} - \d{2}:\d{2})/
	);

	if (timeAtStartMatch) {
		// If time is at the start, extract it
		return timeAtStartMatch[1];
	}

	// Otherwise, look for time elsewhere in the line
	const timeIntitleMatch = text.match(/⏰\s*\[(\d{2}:\d{2} - \d{2}:\d{2})\]/);
	return timeIntitleMatch ? timeIntitleMatch[1] : "";
}

// Extract date from task title
export function extractDueDate(text: string): string {
	let match = text.match(/📅\s*(\d{4}-\d{2}-\d{2})/);

	if (!match) {
		match = text.match(/\[due::\s*(\d{4}-\d{2}-\d{2})\]/);
	}

	if (!match) {
		match = text.match(/\@due\(\s*(\d{4}-\d{2}-\d{2})\)/);
	}

	return match ? match[1] : "";
}

// Extract priority from task title using RegEx
export function extractPriority(text: string): number {
	// Create a regex pattern to match any priority emoji
	const emojiPattern = new RegExp(
		`\\|?\\s*(${Object.values(priorityEmojis).join("|")})\\s*`,
		"g"
	);

	// Execute the regex to find the emoji in the text
	const match = text.match(emojiPattern);

	// If a match is found, map it back to the corresponding priority number
	if (match) {
		const emojiFound = match[0].trim().replace("|", "").trim();
		// console.log(
		// 	"Following is the match I found for the Priority :",
		// 	emojiFound
		// );

		const priorityMatch = Object.entries(priorityEmojis).find(
			([, emoji]) => emoji === emojiFound
		);

		// console.log(
		// 	"The match i found for this emoji from the mapping :",
		// 	priorityMatch
		// );
		return parseInt(priorityMatch?.[0] || "0") || 0;
	}

	// Default priority if no emoji is found
	return 0;
}

// Extract tags from task title
export function extractTags(text: string): string[] {
	const matches = text.match(/\s+#\S+/g);
	return matches ? matches.map((tag) => tag.trim()) : [];
}

// Extract completion date-time value
export function extractCompletionDate(text: string): string {
	let match = text.match(
		/✅\s*([\d\w]+)[\s.\-\/\\](?:[a-zA-Z0-9]+)[\s.\-\/\\](?:[a-zA-Z0-9]+)([T\s.\-/\\]\d{2}:\d{2})?/
	);

	// If not found, try to match the completion:: 2024-09-28 format
	if (!match) {
		match = text.match(
			/\[completion::\s*([\d\w]+)[\s.\-\/\\](?:[a-zA-Z0-9]+)[\s.\-\/\\](?:[a-zA-Z0-9]+)([T\s.\-/\\]\d{2}:\d{2})?\]/
		);

		if (match) {
			return match
				? match[0].replace("[completion::", "").replace("]", "").trim()
				: "";
		}
	}

	if (!match) {
		match = text.match(
			/\@completion\(\s*([\d\w]+)[\s.\-\/\\](?:[a-zA-Z0-9]+)[\s.\-\/\\](?:[a-zA-Z0-9]+)([T\s.\-/\\]\d{2}:\d{2})?\)/
		);

		if (match) {
			return match
				? match[0].replace("@completion(", "").replace(")", "").trim()
				: "";
		}
	}
	// Return the matched date or date-time, or an empty string if no match
	return match ? match[0].replace("✅", "").trim() : "";
}
