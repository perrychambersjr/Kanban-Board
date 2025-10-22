import Sidebar from "./Sidebar";

interface SidebarContainerProps {
  visible: boolean;
  onHide: () => void;
}

const SidebarContainer = ({ visible, onHide }: SidebarContainerProps) => {
  return (
    <div
      className={`h-full transition-transform duration-300 ease-in-out ${
        visible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Sidebar onHide={onHide} />
    </div>
  );
};

export default SidebarContainer;
