import { act, createContext, ReactNode, useEffect, useEffectEvent, useState } from "react";
import { fetchBoards, saveBoard } from "../services/api/boards";
import { Board, BoardContextType, Subtask, Task } from "../types/kanban";

export const BoardContext = createContext<BoardContextType | undefined>(undefined);

export function BoardProvider({children} : {children: ReactNode}) {
  const [boards, setBoards] = useState<Board[]>([]);
  const [activeBoardId, setActiveBoardId] = useState<string | null>(null);

  // Prepopulate boards from API on mount
  useEffect(() => {
    const loadBoards = async () => {
      try {
        const initialBoards = await fetchBoards();
        setBoards(initialBoards);
        normalizeBoards(initialBoards);
        if (initialBoards.length > 0) {
          setActiveBoardId(initialBoards[0].id);
        }
      } catch (error) {
        console.error("Error fetching boards:", error);
      }
    };

    loadBoards();
  }, []);

  
  const normalizeBoards = (boards: Board[]): Board[] => {
  return boards.map(board => ({
    ...board,
    id: board.id ?? crypto.randomUUID(),
    columns: board.columns.map(col => ({
      ...col,
      id: col.id ?? crypto.randomUUID(),
      tasks: col.tasks.map(task => ({
        ...task,
        id: task.id ?? crypto.randomUUID(),
        subtasks: task.subtasks.map(sub => ({
          ...sub,
          id: sub.id ?? crypto.randomUUID(),
        })) as Subtask[],
      })) as Task[],
    })),
  })) as Board[];
  };

  const addBoard = useEffectEvent((name: string) => {
    const newBoard: Board = { id: crypto.randomUUID(), name, columns: [] };
    setBoards(prev => [...prev, newBoard]);
    setActiveBoardId(newBoard.id);
  });

  const addTask = (columnId: string, newTask: Task) => {
    setBoards(prevBoards => 
      prevBoards.map(board =>
        board.id === activeBoardId
        ? {
          ...board,
          columns: board.columns.map(column => 
            column.id === columnId
            ? { ...column, tasks: [...column.tasks, newTask]}
            : column
          )
        } : board
      )
    )

  }

  const setActiveBoard = useEffectEvent((id: string) => {
    setActiveBoardId(id);
  });

  const getBoardById = ((id: string) => {
    return boards.find(board => board.id === id);
  });

  const getBoardColumns = ((id: string) => {
    return boards.find(board => board.id === id)?.columns;
  })

  return (
    <BoardContext.Provider
      value={{ boards, activeBoardId, setActiveBoard, addBoard, getBoardById, getBoardColumns, addTask }}
    >
      {children}
    </BoardContext.Provider>
  );
}