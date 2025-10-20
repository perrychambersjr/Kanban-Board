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
          <Outlet />
        </main>
      </div>

      {!sidebarVisible && (
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