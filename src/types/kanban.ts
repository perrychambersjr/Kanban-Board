//Subtask (smallest unit)
export interface Subtask {
    id: string,
    title: string,
    isCompleted: boolean
}

//Task (belongs to one column)
export interface Task {
    id: string,
    title: string,
    description?: string,
    status: string,
    subtasks: Subtask[]
}

// Column (belongs to one board)
export interface Column {
    id: string,
    name: string,
    tasks: Task[];
}

// Board (top-level entity)
export interface Board {
    id: string,
    name: string,
    columns: Column[];
}

export interface RawSubtask {
  title: string;
  isCompleted: boolean;
  id?: string;
}

export interface RawTask {
  title: string;
  description: string;
  status: string;
  subtasks: RawSubtask[];
  id?: string;
}

export interface RawColumn {
  name: string;
  tasks: RawTask[];
  id?: string;
}

export interface RawBoard {
  name: string;
  columns: RawColumn[];
  id?: string;
}


export interface BoardContextType {
    boards: Board[];
    activeBoardId: string | null;
    activeBoard: Board | null;
    setActiveBoard: (id: string) => void;
    addBoard: (name: string) => void;
    addTask: (columnId: string, newTask: Task) => void;
    getBoardById: (name: string) => Board | undefined;
    getBoardColumns: (id: string) => Column[] | undefined;
}
