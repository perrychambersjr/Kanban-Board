import { useState } from "react";
import { useBoards } from "../../../hooks/useBoards";
import TaskModal from "../Modals/TaskModal";

const AddNewColumn = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const {activeBoardId, getBoardById} = useBoards();

  const activeBoard = getBoardById(activeBoardId!);

  const handleAddTask = (data: {title: string, description: string}) => {
    console.log("New task data:", data);
    // Call add task function
  }

  return (
    <>
      <div onClick={() => setIsTaskModalOpen(true)} className="flex items-center justify-center p-4 cursor-pointer rounded-md bg-[var(--color-main-light-grey)] dark:bg-[var(--color-main-dark-grey)]">
        <h1 className="text-[var(--color-main-medium-grey)] text-3xl">+ New Column</h1>
      </div>

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

export default AddNewColumn