// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div id="containerSidebar" className={`z-40 ${sidebarToggle ? 'show' : ''}`}>
      <div className="navbar-menu relative z-40">
        <nav
          id="sidebar"
          className={`sticky left-0 bottom-0 flex w-3/4 flex-col overflow-y-auto bg-slate-800 pt-6 pb-8 sm:max-w-xs lg:w-65, t ${sidebarToggle ? 'show' : ''}`}
        >
          <div className="px-4">
            <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">Main</h3>
            <ul className="mb-8 text-sm font-medium">
              <li>
                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-slate-500"
                  to="/"
                >
                  <span className="select-none">Homepage</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-slate-500"
                  to="/devices"
                >
                  <span className="select-none">Devices</span>
                </Link>
                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-slate-500"
                  to="#link1"
                >
                  <span className="select-none">About</span>
                </Link>
                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-slate-500"
                  to="#link1"
                >
                  <span className="select-none">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
