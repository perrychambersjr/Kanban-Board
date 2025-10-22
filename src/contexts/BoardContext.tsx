import { createContext, ReactNode, useEffect, useEffectEvent, useState } from "react";
import { fetchBoards } from "../services/api/boards";
import { Board, BoardContextType } from "../types/kanban";

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

  const setActiveBoard = useEffectEvent((id: string) => {
    setActiveBoardId(id);
  });

  const getActiveBoard = ((id: string) => {
    return boards.find(board => board.id === id);
  });

  return (
    <BoardContext.Provider
      value={{ boards, activeBoardId, setActiveBoard, addBoard, getActiveBoard }}
    >
      {children}
    </BoardContext.Provider>
  );
}