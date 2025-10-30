import { Board, Column, Task } from "../../types/kanban";

export async function fetchBoards(): Promise<Board[]> {
    const response = await fetch('http://localhost:4000/boards');
    if (!response.ok) {
        throw new Error('Failed to fetch boards');
    }
    const data: Board[] = await response.json();
    return data;
}

export async function addTask(board: Board, columnId: string, newTask: Task): Promise<Board> {
    const updatedBoard = {
        ...board,
        columns: board.columns.map((col: Column) =>
        col.id === columnId
            ? { ...col, tasks: [...col.tasks, newTask] }
            : col
        ),
    };

    const res = await fetch(`http://localhost:4000/boards/${board.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBoard),
    });

    if (!res.ok) throw new Error("Failed to update board");
        return res.json();
}