import { Task } from "../../../types/kanban";
import Modal from "./Modal";

interface ViewTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    task: Task
}

const ViewTaskModal = ({
    isOpen,
    onClose,
    task
}: ViewTaskModalProps) => {
  
  return (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={task.title}
    >
        {task.description && (
            <p className="mb-4 text-[var(--color-main-medium-grey)]">{task.description}</p>
        )}

        <div className="mb-4">
            <h3 className="font-semibold mb-2">{`Subtasks (${task.subtasks.filter(sb => sb.isCompleted).length} of ${task.subtasks.length})`}</h3>
            <div className="flex flex-col gap-4 bg-[var(--color-main-very-dark-grey)]">
                {task.subtasks.map(subtask => (
                <label key={subtask.id} className="flex items-center gap-4">
                    <input
                    type="checkbox"
                    checked={subtask.isCompleted}
                    style={{ accentColor: "var(--color-main-purple)" }}
                    />
                    <span className={subtask.isCompleted ? "line-through text-gray-400" : ""}>
                    {subtask.title}
                    </span>
                </label>
                ))}
            </div>
        </div>

        <div>
            <h3 className="font-semibold mb-1">Current Status</h3>
            <p>{task.status}</p>
        </div>

    </Modal>
  )
}

export default ViewTaskModal