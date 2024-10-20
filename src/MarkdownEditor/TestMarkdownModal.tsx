import { ButtonComponent, Modal, Notice, TFile } from 'obsidian';
import React, { useRef } from 'react';

import { EmbeddableMarkdownEditor } from '../Services/EmbeddableMarkdownEditor'; // Import the editor

interface TestMarkdownModalProps {
	app: App;
	filePath: string; // Path of the file where the content will be saved
	onClose: () => void;
}

export class TestMarkdownModal extends Modal {
	editorRef = useRef<EmbeddableMarkdownEditor | null>(null);
	filePath: string;

	constructor(props: TestMarkdownModalProps) {
		super(props.app);
		this.filePath = props.filePath;
		this.onClose = props.onClose;
	}

	onOpen() {
		const { contentEl } = this;

		contentEl.createEl('h2', { text: 'Markdown Editor Test Modal' });

		// Create a container for the markdown editor
		const editorContainer = contentEl.createDiv();

		// Initialize the markdown editor
		this.editorRef.current = new EmbeddableMarkdownEditor(this.app, editorContainer, {
			value: '', // Initial content (can be empty or loaded from a file)
			onChange: () => { }, // Handle any change event if needed
			onSubmit: this.handleSave.bind(this), // Submit/save handler
		});

		// Add a save button below the editor
		const saveButton = new ButtonComponent(contentEl);
		saveButton.setButtonText('Save').onClick(() => this.handleSave());

		// Add a close button
		const closeButton = new ButtonComponent(contentEl);
		closeButton.setButtonText('Close').onClick(() => this.onClose());
	}

	async handleSave() {
		if (this.editorRef.current) {
			const content = this.editorRef.current.value;

			try {
				const file = this.app.vault.getAbstractFileByPath(this.filePath) as TFile;
				if (file) {
					await this.app.vault.modify(file, content); // Save content to the file
					new Notice('File saved successfully!');
				} else {
					new Notice('File not found!');
				}
			} catch (error) {
				new Notice('Error saving file.');
			}
		}
		this.onClose();
	}

	onClose() {
		super.onClose();
		this.onClose();
	}
}
