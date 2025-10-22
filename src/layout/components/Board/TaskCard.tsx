
import { Task as TaskType } from '../../../types/kanban'

const TaskCard = ({ task }: {task: TaskType }) => {
  return (
    <div key={task.id} className="p-4 bg-white font-semibold rounded-md shadow-md dark:bg-[var(--color-main-dark-grey)] dark:text-white transition-all duration-300 cursor-pointer">
        <div>
            <h1>{task.title}</h1>
            <p className="dark:text-[var(--color-main-medium-grey)] font-light">{task.subtasks.length} / 3</p>   
        </div>
        
    </div>
  )
}

export default TaskCard