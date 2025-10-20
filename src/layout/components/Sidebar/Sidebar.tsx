import BoardList from './BoardList';
import ThemeToggle from './ThemeToggle';
import HideIcon from '/assets/icon-hide-sidebar.svg';
import LogoDark from '/assets/logo-dark.svg';
import LogoLight from '/assets/logo-light.svg';

const Sidebar = ({ onHide }: { onHide: () => void }) => {

  return (
    <aside className="w-64 bg-white dark:bg-[var(--color-main-dark-grey)] dark:text-white flex flex-col h-screen transition-all duration-300">
      {/* Logo */}
      <div className="pt-6 pb-8 px-6">
        <img
          src={LogoLight}
          alt="Logo"
          className="h-8 w-auto hidden dark:block"
        />
        <img
          src={LogoDark}
          alt="Logo"
          className="h-8 w-auto block dark:hidden"
        />
      </div>

      {/* Board list */}
      <BoardList />

      {/* Bottom section */}
      <div className="mt-auto">
        {/* Hide Sidebar Button */}
        <div
          onClick={onHide}
          className="flex flex-row items-center justify-center font-semibold text-lg p-4 gap-3 text-[var(--color-main-medium-grey)]
          hover:cursor-pointer hover:text-[var(--color-main-purple)] hover:bg-[var(--color-main-purple-light)] dark:hover:bg-white hover:rounded-r-full transition"
        >
          <img src={HideIcon} alt="" />
          <h1>Hide Sidebar</h1>
        </div>

        {/* Theme toggle */}
        <ThemeToggle />
      </div>
    </aside>
  );
}

export default Sidebar