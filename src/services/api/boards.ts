import { Board } from '../../types/kanban';

export async function fetchBoards(): Promise<Board[]> {
    const response = await fetch('http://localhost:4000/boards');
    if (!response.ok) {
        throw new Error('Failed to fetch boards');
    }
    const data: Board[] = await response.json();
    return data;
}

export async function saveBoard(board: Board): Promise<void> {
    try {
        if(!board) return;

        const res = await fetch(`http://localhost:3000/boards/${board.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(board), 
        });

        if (!res.ok) throw new Error("Failed to save board");
    }
    catch (err) {
        console.error(err);
    }
}