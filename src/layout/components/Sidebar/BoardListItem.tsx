import BoardIcon from '../../../../public/assets/icon-board.svg';
import { useBoards } from '../../../hooks/useBoards';
import { Board } from '../../../types/kanban';

interface Props {
    board: Board;
    isActive: boolean;
}

const BoardListItem = ({ board, isActive}: Props) => {
  const { setActiveBoard } = useBoards();
  
  return (
    <li>
        
        <button
            onClick={() => setActiveBoard(board.id)}
            className={`w-full text-left p-2 hover:cursor-pointer ${
                isActive ? "bg-[var(--color-main-purple)] rounded-r-full text-white" : "text-[var(--color-main-medium-grey)] hover-bg-gray-200 dark:hover:bg-gray-700"
            }`}
        >
            <div className="gap-2 flex flex-row items-center justify-start">
                <img src={BoardIcon} alt="" />
                <p className="font-semibold">{board.name}</p>
            </div>

        </button>
    </li>
  )
}

export default BoardListItem