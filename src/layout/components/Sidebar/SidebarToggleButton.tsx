interface SidebarToggleButtonProps {
  onClick: () => void;
}

const SidebarToggleButton = ({ onClick }: SidebarToggleButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-[5.5rem] left-0 flex items-center gap-2 bg-[var(--color-main-purple)] text-white px-4 py-2 rounded-r-full hover:bg-[var(--color-main-purple-light)] transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
      <span className="text-sm font-medium">Show Sidebar</span>
    </button>
  );
};

export default SidebarToggleButton;
