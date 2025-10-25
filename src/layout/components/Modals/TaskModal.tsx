import { useEffect, useState } from 'react';
import { Subtask, Task } from '../../../types/kanban';
import Modal from './Modal';

interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: Task) => void;
    initialData?: {id: string, title: string; description: string, status: string, subtasks: Subtask[] };
    mode: "add" | "edit";
    columns: { id: string, name: string}[];
}

const TaskModal = ({
    isOpen,
    onClose,
    onSubmit,
    initialData,
    mode,
    columns
}: TaskModalProps ) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(columns[0]?.id ?? "");
  const [subtasks, setSubtasks] = useState<Subtask[]>([{id: crypto.randomUUID(), title: "", isCompleted: false }]);

  useEffect(() => {
    if (initialData) {
        setTitle(initialData.title);
        setDescription(initialData.description || '');
        setStatus(initialData.status);
        setSubtasks(initialData.subtasks || []);
    } else {
        setTitle('');
        setDescription('');
        setStatus(columns[0]?.id ?? "");
        setSubtasks([]);
    }
  }, [initialData, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const task: Task = {
        id: initialData?.id ?? crypto.randomUUID(),
        title,
        description,
        status,
        subtasks
    }

    onSubmit(task);
    onClose();
  }

  const handleAddSubtask = () => {
    setSubtasks((prev) => [
        ...prev,
        { id: crypto.randomUUID(), title: "", isCompleted: false}
    ]);
  }

  const handleRemoveSubtask = (id: string) => {
    setSubtasks((prev) => prev.filter((sub) => sub.id !== id));
  }

  const handleSubtaskChange = (id: string, value:string) => {
    setSubtasks((prev) => 
        prev.map((sub) =>
            sub.id === id ? { ...sub, title:value} : sub
        )
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={mode === 'add' ? 'Add New Task' : 'Edit Task'}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="text-sml dark:text-white text-gray-400">Title</label>  
            <input 
                className="border border-[var(--color-main-medium-grey)] rounded-md p-2"
                placeholder='e.g. Take coffee break'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label className="text-sml dark:text-white text-gray-400">Description</label>  
            <textarea
                className="border border-[var(--color-main-medium-grey)] rounded-md p-2 resize-none"
                placeholder='e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'
                value={description}
                rows={5}
                cols={30}
                onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Subtasks</label>

            {subtasks.map((subtask) => (
                <div key={subtask.id} className="flex items-center gap-2">
                <input
                    type="text"
                    value={subtask.title}
                    onChange={(e) => handleSubtaskChange(subtask.id, e.target.value)}
                    placeholder="e.g. Make coffee"
                    className="flex-1 border border-gray-300 rounded-md p-2 dark:bg-[var(--color-dark-bg)]"
                />
                <button
                    type="button"
                    onClick={() => handleRemoveSubtask(subtask.id)}
                    className="text-gray-400 hover:text-red-500 text-lg"
                >
                    ✕
                </button>
                </div>
            ))}

            <button
                type="button"
                onClick={handleAddSubtask}
                className="text-[var(--color-main-purple)] bg-white w-full rounded-full font-semibold text-md py-2 "
            >
                + Add New Subtask
            </button>
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sml dark:text-white text-gray-400">Status</label>  
                <select 
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border border-[var(--color-main-medium-grey)] rounded-md p-2"
                >
                {columns.map((col) => (
                    <option key={col.id} value={col.id} className="bg-[var(--color-main-dark-grey)] text-white">
                        {col.name}
                    </option>
                ))}
                </select>
            </div>    
            <button 
                type="submit"
                className="bg-[var(--color-main-purple)] hover:bg-[var(--color-main-purple-light)] text-white rounded-full py-2"
            >
                {mode === 'add' ? 'Create Task' : 'Save Changes'}
            </button>
        </form>
    </Modal>
  )
}

export default TaskModal