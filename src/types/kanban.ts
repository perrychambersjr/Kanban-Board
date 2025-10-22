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

export interface BoardContextType {
    boards: Board[];
    activeBoardId: string | null;
    setActiveBoard: (id: string) => void;
    addBoard: (name: string) => void;
<<<<<<< HEAD
    getActiveBoard: (name: string) => Board | undefined;
=======
>>>>>>> 05ba77195d75f7393d2339438ead288c67290bf0
}