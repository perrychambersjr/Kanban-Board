import { Column as ColumnType } from "../../../types/kanban"
import TaskCard from "./TaskCard"

const Column = ({ column }: { column: ColumnType}) => {
  return (
    <div>
        <h2 className="mb-4 text-lg font-semibold text-[var(--color-main-medium-grey)]">
            {column.name} ({column.tasks.length})
        </h2>
        <div className="grid grid-rows-1 gap-4 min-h-1/4">
            {column.tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    </div>
  )
}

export default Column