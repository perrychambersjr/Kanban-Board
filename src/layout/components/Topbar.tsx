import Ellipsis from '../../../public/assets/icon-vertical-ellipsis.svg';
import { useBoards } from '../../hooks/useBoards';

const Topbar = () => {
  const {getActiveBoard, activeBoardId} = useBoards();
  const activeBoard = getActiveBoard(activeBoardId!);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white">
      <h1 className="text-2xl font-semibold font-display">{ activeBoard?.name }</h1>
      <div className="flex items-center justify-between gap-4">
        <button className="bg-[var(--color-main-purple)] text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-[var(--color-main-purple-light)]">
          + Add New Task
        </button>
        <button className="cursor-pointer">
          <img src={Ellipsis} alt="" />
        </button>
      </div>
    </header>
  )
}

export default Topbar