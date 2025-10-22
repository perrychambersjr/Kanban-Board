import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarToggleButton from "./components/Sidebar/SidebarToggleButton";
import Topbar from "./components/Topbar";

const AppLayout = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden relative">
      <div
        className={`transition-all duration-300 ease-in-out ${
          sidebarVisible ? "w-64" : "w-0"
        }`}
      >
        <div
          className={`h-full overflow-hidden transition-transform duration-300 ease-in-out ${
            sidebarVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar onHide={() => setSidebarVisible(false)} />
        </div>
      </div>

      <div
        className={`flex flex-col flex-1 transition-all duration-300 ease-in-out`}
      >
        <Topbar />
        <main className="flex-1 overflow-y-auto bg-[var(--color-main-white)] dark:bg-[var(--color-main-very-dark-grey)] transition-colors duration-300">

          <Outlet />
        </main>
      </div>

      {!sidebarVisible && (

        <SidebarToggleButton onClick={() => setSidebarVisible(true)} />
      )}
    </div>
  );
};

export default AppLayout;
