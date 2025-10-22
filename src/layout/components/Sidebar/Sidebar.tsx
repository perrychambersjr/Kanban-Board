import BoardList from "./BoardList";
import ThemeToggle from "./ThemeToggle";

import HideIcon from "/assets/icon-hide-sidebar.svg";
import LogoDark from "/assets/logo-dark.svg";
import LogoLight from "/assets/logo-light.svg";

interface SidebarProps {
  onHide: () => void;
}

const Sidebar = ({ onHide }: SidebarProps) => {
  return (
    <aside className="w-64 h-screen flex flex-col bg-white dark:bg-[var(--color-main-dark-grey)] dark:text-white transition-all duration-300">
      
      <div className="pt-6 pb-8 px-6">
        <img
          src={LogoLight}
          alt="Light Logo"
          className="h-8 w-auto hidden dark:block"
        />
        <img
          src={LogoDark}
          alt="Dark Logo"
          className="h-8 w-auto block dark:hidden"
        />
      </div>

      <BoardList />

    <div className="mt-auto relative">
      <div
        id="sidebar-hide-button"
        onClick={onHide}
        className="flex flex-row items-center justify-center font-semibold text-lg p-4 gap-3 text-[var(--color-main-medium-grey)]
          hover:cursor-pointer hover:text-[var(--color-main-purple)] hover:bg-[var(--color-main-purple-light)]
          dark:hover:bg-white hover:rounded-r-full transition"
      >
        <img src={HideIcon} alt="" />
        <h1>Hide Sidebar</h1>
      </div>

      <ThemeToggle />
    </div>
    </aside>
  );
};

export default Sidebar;
