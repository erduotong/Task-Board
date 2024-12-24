import { App, moment as _moment } from "obsidian";
import {
	deleteTaskFromFile,
	deleteTaskFromJson,
	moveFromCompletedToPending,
	moveFromPendingToCompleted,
	updateTaskInFile,
	updateTaskInJson,
} from "./TaskItemUtils";
import store, {
	allTaskItemsToDisplay,
	app,
	globalSettings,
	plugin,
	taskBoardSettings,
} from "src/store";

import { DeleteConfirmationModal } from "src/modal/DeleteConfirmationModal";
import { EditButtonMode } from "src/interfaces/GlobalSettings";
import { get } from "svelte/store";
import { t } from "./lang/helper";
import type { taskItem } from "src/interfaces/TaskItemProps";

export const handleSubTasksChange = (updatedTask: taskItem) => {
	updateTaskInJson(updatedTask);
	updateTaskInFile(get(plugin), updatedTask, updatedTask);
};

export const handleCheckboxChange = (updatedTask: taskItem) => {
	const myPlugin = get(plugin);
	// const moment = require("moment");

	const updatedTasks = get(allTaskItemsToDisplay).filter(
		(t: taskItem) => t.id !== updatedTask.id
	);
	store.allTaskItemsToDisplay.set(updatedTasks); // Update state to remove completed task

	// Check if the task is completed
	if (updatedTask.completed) {
		const taskWithCompleted = { ...updatedTask, completed: "" };
		// Move from Completed to Pending
		moveFromCompletedToPending(myPlugin, taskWithCompleted);
		updateTaskInFile(myPlugin, taskWithCompleted, taskWithCompleted);
	} else {
		const moment = _moment as unknown as typeof _moment.default;
		const taskWithCompleted = {
			...updatedTask,
			completed: moment().format(
				get(taskBoardSettings)?.taskCompletionDateTimePattern
			),
		};
		// Move from Pending to Completed
		moveFromPendingToCompleted(myPlugin, taskWithCompleted);
		updateTaskInFile(myPlugin, taskWithCompleted, taskWithCompleted);
	}
};

export const handleDeleteTask = (task: taskItem) => {
	const myPlugin = get(plugin);
	const app = myPlugin.app;
	const mssg = t(61);
	const deleteModal = new DeleteConfirmationModal(app, {
		app,
		mssg,
		onConfirm: () => {
			deleteTaskFromFile(myPlugin, task);
			deleteTaskFromJson(myPlugin, task);
			// Remove the task from state after deletion
			const newTasks = get(allTaskItemsToDisplay).filter(
				(t: taskItem) => t.id !== task.id
			);
			store.allTaskItemsToDisplay.set(newTasks);
		},
		onCancel: () => {
			// console.log('Task deletion canceled');
		},
	});
	deleteModal.open();
};

export const handleEditTask = (task: taskItem) => {
	const myPlugin = get(plugin);
	if (
		myPlugin.settings.data.globalSettings.editButtonAction ===
		EditButtonMode.PopUp
	) {
		const editModal = new AddOrEditTaskModal(
			app,
			plugin,
			(updatedTask: taskItem) => {
				updatedTask.filePath = task.filePath;
				// Update the task in the file and JSON
				updateTaskInFile(myPlugin, updatedTask, task);
				updateTaskInJson(updatedTask);
			},
			task.filePath,
			task
		);
		editModal.open();
	} else if (
		myPlugin.settings.data.globalSettings.editButtonAction ===
		EditButtonMode.NoteInTab
	) {
		const getFile = myPlugin.app.vault.getFileByPath(task.filePath);
		if (getFile) {
			myPlugin.app.workspace.getLeaf("tab").openFile(getFile);
		}
	} else if (
		myPlugin.settings.data.globalSettings.editButtonAction ===
		EditButtonMode.NoteInSplit
	) {
		const getFile = myPlugin.app.vault.getFileByPath(task.filePath);
		if (getFile) {
			myPlugin.app.workspace.getLeaf("split").openFile(getFile);
		}
	} else if (
		myPlugin.settings.data.globalSettings.editButtonAction ===
		EditButtonMode.NoteInWindow
	) {
		const getFile = myPlugin.app.vault.getFileByPath(task.filePath);
		if (getFile) {
			myPlugin.app.workspace.getLeaf("window").openFile(getFile);
		}
	} else {
		// markdownButtonHoverPreviewEvent(app, event, task.filePath);
	}
};
