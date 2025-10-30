
import { useState } from 'react'
import { Task as TaskType } from '../../../types/kanban'
import ViewTaskModal from '../Modals/ViewTaskModal';

const TaskCard = ({ task }: {task: TaskType }) => {
  const [isViewTaskModalOpen, setIsViewTaskModalOpen] = useState(false);

  return (
    <>
      <div key={task.id} className="p-4 bg-white font-semibold rounded-md shadow-md dark:bg-[var(--color-main-dark-grey)] dark:text-white transition-all duration-300 cursor-pointer">
        <div onClick={() => setIsViewTaskModalOpen(true)}>
            <h1>{task.title}</h1>
            <p className="dark:text-[var(--color-main-medium-grey)] font-light">{task.subtasks.length} / 3</p>   
        </div>
      </div>

      <ViewTaskModal
        isOpen={isViewTaskModalOpen}
        onClose={() => setIsViewTaskModalOpen(false)}
        task={task}
      />
    </>
  )
}

export default TaskCard