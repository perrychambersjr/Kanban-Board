import { useBoards } from '../../../hooks/useBoards';
import BoardListItem from './BoardListItem';

const BoardList = () => {
<<<<<<< HEAD
  const { boards, activeBoardId } = useBoards();
=======
  const { boards, activeBoardId} = useBoards();
>>>>>>> 05ba77195d75f7393d2339438ead288c67290bf0
  
  
  return (
    <div>
        <h1 className="p-2 text-[var(--color-main-medium-grey)] font-semibold">ALL BOARDS ({boards.length})</h1>
        <ul className="space-y-2">
            {boards.map(board => (
                <BoardListItem
                    key={board.id}
                    board={board}
                    isActive={board.id === activeBoardId}
                />
            ))}
            <li>
                <button className="w-full text-left text-blue-500 hover:text-blue-700">
                    + Create New Board
                </button>
            </li>
        </ul>
    </div>

  )
}

export default BoardList