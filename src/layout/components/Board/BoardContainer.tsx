import { useBoards } from '../../../hooks/useBoards'
import AddNewColumn from './AddNewColumn'
import Column from './Column'

const BoardContainer = () => {
  const { activeBoardId, getBoardById } = useBoards()
  const activeBoard = getBoardById(activeBoardId!)

  if (!activeBoard) {
    return <div>No active board selected.</div>
  }

  return (
    <section className="grid grid-cols-4 gap-4 min-h-screen">
        {activeBoard.columns.map(col => (
            <Column key={col.id} column={col} />
        ))}
        <AddNewColumn />
    </section>
  )
}

export default BoardContainer