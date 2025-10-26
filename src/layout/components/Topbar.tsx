import { useState } from 'react';
import Ellipsis from '../../../public/assets/icon-vertical-ellipsis.svg';
import { useBoards } from '../../hooks/useBoards';
import { Task } from '../../types/kanban';
import TaskModal from './Modals/TaskModal';

const Topbar = () => {
  const {getBoardById, activeBoardId, addTask } = useBoards();
  const activeBoard = getBoardById(activeBoardId!);

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const handleAddTask = (data: Task, columnId: string) => {
    if(!activeBoard) return;
    addTask(columnId, data);
  }

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-[var(--color-main-dark-grey)] dark:text-white transition-all duration-300">
        <h1 className="text-2xl font-semibold font-display">{ activeBoard?.name }</h1>
        <div className="flex items-center justify-between gap-4">
          <button 
            onClick={() => setIsTaskModalOpen(true)}
            className="bg-[var(--color-main-purple)] text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-[var(--color-main-purple-light)]">
            + Add New Task
          </button>
          <button className="cursor-pointer">
            <img src={Ellipsis} alt="" />
          </button>
        </div>
      </header>

      {/* Task Modal */}
      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        mode="add"
        onSubmit={handleAddTask}
        columns={activeBoard?.columns ?? []}
      />
    </>
  )
}

export default Topbar