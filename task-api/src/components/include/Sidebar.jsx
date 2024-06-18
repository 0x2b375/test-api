// Sidebar.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ sidebarToggle }) => {
  useEffect(() => {
    const sidebar = document.getElementById('sidebar');
    const navbar = document.getElementById('navbar');
    if (sidebar && navbar) {
      sidebar.style.top = `${parseInt(navbar.clientHeight) - 1}px`;
    }
  }, []);

  return (
    <div id="containerSidebar" className={`z-40 ${sidebarToggle ? 'show' : ''}`}>
      <div className="navbar-menu relative z-40">
        <nav
          id="sidebar"
          className={`sticky left-0 bottom-0 flex w-3/4 flex-col overflow-y-auto bg-gray-700 pt-6 pb-8 sm:max-w-xs lg:w-80 ${sidebarToggle ? 'show' : ''}`}
        >
          <div className="px-4 pb-6">
            <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">Main</h3>
            <ul className="mb-8 text-sm font-medium">
              <li>
                <Link
                  className="active flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  to="#homepage"
                >
                  <span className="select-none">Homepage</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  to="#link1"
                >
                  <span className="select-none">link1</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 pb-6">
            <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">Legal</h3>
            <ul className="mb-8 text-sm font-medium">
              <li>
                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  to="#tc"
                >
                  <span className="select-none">Terms and Condition</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  to="#privacy"
                >
                  <span className="select-none">Privacy policy</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  to="#imprint"
                >
                  <span className="select-none">Imprint</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 pb-6">
            <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">Others</h3>
            <ul className="mb-8 text-sm font-medium">
              <li>
                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  to="#ex1"
                >
                  <span className="select-none">...</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                  to="#ex2"
                >
                  <span className="select-none">...</span>
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
