import IconMoon from '../../../../public/assets/icon-dark-theme.svg';
import IconSun from '../../../../public/assets/icon-light-theme.svg';
import { useTheme } from "../../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className="flex items-center justify-center gap-3 py-4 bg-[var(--color-main-light-grey)] dark:bg-[var(--color-main-very-dark-grey)]"
    >
      <img src={IconSun} className="w-4 h-4 text-main-medium-grey" />

      {/* Switch */}
      <button
        onClick={toggleTheme}
        className="relative w-12 h-6 rounded-full bg-main-purple transition-colors hover:bg-main-purple-light focus:outline-none"
      >
        <span
          className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform ${
            theme === "dark" ? "translate-x-6" : ""
          }`}
        ></span>
      </button>

      <img src={IconMoon} className="w-4 h-4 text-main-medium-grey" />
    </div>
  )
}

export default ThemeToggle