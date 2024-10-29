// /src/utils/RealTimeScanning.ts

import { App, TFile } from "obsidian";

import { ScanningVault } from "src/utils/ScanningVault";
import type TaskBoard from "main";
import { scanFilterForFilesNFolders } from "./Checker";

export class RealTimeScanning {
	app: App;
	plugin: TaskBoard;
	taskBoardFileStack: string[] = [];
	scanTimer: number;
	scanningVault: ScanningVault;

	constructor(app: App, plugin: TaskBoard) {
		this.app = app;
		this.plugin = plugin;
		this.scanTimer = 0;
		this.scanningVault = new ScanningVault(app, plugin);
	}

	async initializeStack(realTimeScanning: boolean) {
		if (realTimeScanning) return;
		try {
			const storedStack = localStorage.getItem("taskBoardFileStack");
			if (storedStack) {
				this.taskBoardFileStack = JSON.parse(storedStack);
			} else {
			}
			// this.startScanTimer();
		} catch (error) {
			console.error("Error loading file stack:", error);
		}
	}

	async saveStack() {
		try {
			localStorage.setItem(
				"taskBoardFileStack",
				JSON.stringify(this.taskBoardFileStack)
			);
		} catch (error) {
			console.error("Error saving file stack:", error);
		}
	}

	async startScanTimer() {
		this.scanTimer = window.setInterval(() => {
			this.processStack();
		}, 25 * 60 * 1000); // Set to 5 minutes
	}

	async processStack() {
		const filesToProcess = this.taskBoardFileStack.slice();
		this.taskBoardFileStack = [];
		const files = filesToProcess
			.map((filePath) => this.getFileFromPath(filePath))
			.filter((file) => !!file);

		if (files.length > 0) {
			// Send all files for scanning and updating tasks
			await this.scanningVault.updateTasksFromFiles(files);
		}
		// Save updated stack (which should now be empty)
		await this.saveStack();
	}

	getFileFromPath(filePath: string): TFile {
		return this.plugin.app.vault.getAbstractFileByPath(filePath) as TFile;
	}

	async onFileChange(
		file: TFile,
		realTimeScanning: boolean,
		scanFilters: any
	) {
		if (file.extension === "md") {
			// If both checks pass, proceed with the scanning logic
			if (scanFilterForFilesNFolders(file, scanFilters)) {
				// If real-time scanning is enabled, scan the file immediately
				if (realTimeScanning) {
					this.scanningVault.updateTasksFromFiles([file]);
				} else {
					// If the file is already in the stack, ignore it
					if (this.taskBoardFileStack.at(0) === undefined) {
						this.taskBoardFileStack.push(file.path); // Add the file to the stack
						await this.saveStack(); // Save the updated stack
					} else if (!this.taskBoardFileStack.includes(file.path)) {
						this.taskBoardFileStack.push(file.path);
						await this.saveStack(); // Save the updated stack
					} else {
						// console.log(
						// 	"The file already exists in taskBoardFileStack:",
						// 	file.path
						// );
					}
				}
			} else {
				// console.log(
				// 	"The file is not allowed for Scanning : ",
				// 	file.path
				// );
			}
		}
	}

	clearScanTimer() {
		window.clearInterval(this.scanTimer);
	}
}
