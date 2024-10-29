// src/views/KanbanView.ts

import { App, ItemView, WorkspaceLeaf } from "obsidian";
import { ReScanVaultIcon, TaskBoardIcon } from "src/types/Icons";

import { Board } from "src/interfaces/BoardConfigs";
import KanbanBoard from "src/components/KanbanBoard";
import ReactDOM from "react-dom/client";
import type TaskBoard from "../../main";
import { VIEW_TYPE_TASKBOARD } from "src/interfaces/GlobalVariables";
import { loadBoardsData } from "src/utils/JsonFileOperations";
import { openReScanVaultModal } from "../services/OpenModals";
import { t } from "src/utils/lang/helper";

export class KanbanView extends ItemView {
	plugin: TaskBoard;
	private boards: Board[];
	private root: ReactDOM.Root;

	constructor(app: App, plugin: TaskBoard, leaf: WorkspaceLeaf) {
		super(leaf);
		this.app = app;
		this.plugin = plugin;
		const { contentEl } = this;
		this.contentEl = contentEl;
		this.contentEl.empty();
		const container = document.createElement("div");
		this.contentEl.appendChild(container);
		this.root = ReactDOM.createRoot(this.contentEl);
		this.boards = [];
		this.icon = TaskBoardIcon;
	}

	getViewType() {
		return VIEW_TYPE_TASKBOARD;
	}

	getDisplayText() {
		return t(130);
	}

	getSettings() {
		return this.plugin.settings;
	}

	async onOpen() {
		this.addAction(ReScanVaultIcon, t(5), () => {
			openReScanVaultModal(this.app, this.plugin);
		});

		await this.loadBoards();
		this.renderBoard();
	}

	private async loadBoards() {
		try {
			this.boards = await loadBoardsData(this.plugin);
		} catch (err) {
			console.error("Failed to load boards data:", err);
		}
	}

	private renderBoard() {
		this.root.render(
			<KanbanBoard
				app={this.app}
				plugin={this.plugin}
				boardConfigs={this.boards}
			/>
		);
	}

	async onClose() {
		// Clean up when view is closed
		this.root.unmount();
	}
}
