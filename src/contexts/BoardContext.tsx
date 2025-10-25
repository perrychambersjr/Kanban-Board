import { createContext, ReactNode, useEffect, useEffectEvent, useState } from "react";
import { fetchBoards } from "../services/api/boards";
import { Board, BoardContextType, Task } from "../types/kanban";

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
        if (initialBoards.length > 0) {
          setActiveBoardId(initialBoards[0].id);
        }
      } catch (error) {
        console.error("Error fetching boards:", error);
      }
    };

    loadBoards();
  }, []);

  const addBoard = useEffectEvent((name: string) => {
    const newBoard: Board = { id: crypto.randomUUID(), name, columns: [] };
    setBoards(prev => [...prev, newBoard]);
    setActiveBoardId(newBoard.id);
  });

  const addTask = (boardId: string, columnId: string, newTask: Task) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) => {
        if (board.id !== boardId) return board;

        return {
          ...board,
          columns: board.columns.map((col) => {
            if (col.id !== columnId) return col;

            return {
              ...col,
              tasks: [
                ...col.tasks,
                { ...newTask, id: crypto.randomUUID() } // generate a unique ID
              ],
            };
          }),
        };
      })
    );
  };

  const setActiveBoard = useEffectEvent((id: string) => {
    setActiveBoardId(id);
  });

  const getBoardById = ((id: string) => {
    return boards.find(board => board.id === id);
  });

  const getBoardColumns = ((id: string) => {
    return boards.find(board => board.id === id)?.columns || [];
  })

  return (
    <BoardContext.Provider
      value={{ boards, activeBoardId, setActiveBoard, addBoard, getBoardById, getBoardColumns, addTask }}
    >
      {children}
    </BoardContext.Provider>
  );
}