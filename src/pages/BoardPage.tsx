import BoardContainer from "../layout/components/Board/BoardContainer"

const BoardPage = () => {
  return (
    <div className="bg-[var(--color-main-white)] min-h-screen p-6 flex-1 transition-all duration-300 dark:bg-[var(--color-main-very-dark-grey)] dark:text-white">
      <BoardContainer />
    </div>
  )
}

export default BoardPage