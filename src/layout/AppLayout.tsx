<<<<<<< HEAD
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
=======
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Topbar from './components/Topbar'

const AppLayout = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  
return (
    <div className="flex h-screen overflow-hidden relative">
      <div
        className={`transition-transform duration-300 ${
          sidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar onHide={() => setSidebarVisible(false)} />
      </div>

      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 duration-300 overflow-y-auto bg-[var(--color-main-white)] dark:bg-[var(--color-main-very-dark-grey)] transition-colors">
>>>>>>> 05ba77195d75f7393d2339438ead288c67290bf0
          <Outlet />
        </main>
      </div>

      {!sidebarVisible && (
<<<<<<< HEAD
        <SidebarToggleButton onClick={() => setSidebarVisible(true)} />
      )}
    </div>
  );
};

export default AppLayout;
=======
        <button
          onClick={() => setSidebarVisible(true)}
          className="absolute bottom-8 left-0 flex items-center gap-2 bg-[var(--color-main-purple)] text-white px-4 py-2 rounded-r-full hover:bg-[var(--color-main-purple-light)] transition"
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
      )}
    </div>
  );
}

export default AppLayout
>>>>>>> 05ba77195d75f7393d2339438ead288c67290bf0
