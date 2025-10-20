import { Board } from '../../types/kanban';

export async function fetchBoards(): Promise<Board[]> {
    const response = await fetch('http://localhost:4000/boards');
    if (!response.ok) {
        throw new Error('Failed to fetch boards');
    }
    const data: Board[] = await response.json();
    return data;
}