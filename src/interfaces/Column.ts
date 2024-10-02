import { taskItem } from "./TaskItem";

export interface ColumnProps {
	activeBoard: number;
	colType: string;
	active?: boolean;
	collapsed?: boolean;
	data: {
		name: string;
		index: number;
		coltag?: string;
		range?: {
			tag: string;
			rangedata: {
				from: number;
				to: number;
			};
		};
		limit?: number;
	};
	tasks: taskItem[];
	pendingTasks: taskItem[];
	completedTasks: taskItem[];
}
