import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div className={`fixed z-20 top-0 left-0 h-full bg-slate-800 transition-all duration-300 ${sidebarToggle ? 'w-40 md:w-80' : 'w-0'}`}>
      <div className={`navbar-menu relative h-full ${sidebarToggle ? 'block' : 'hidden'}`}>
        <nav
          id="sidebar"
          className="flex flex-col pt-6 sm:max-w-xs lg:w-64 w-full"
        >
          <div className="px-4">
            <ul className="mb-8 text-sm font-medium mt-7 text-nowrap">
              <li>
                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200"
                  to="/"
                >
                  <span className="select-none">Нүүр Хуудас</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200"
                  to="/devices"
                >
                  <span className="select-none">Төхөөрөмж</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200"
                  to="/about"
                >
                  <span className="select-none">Мэдээлэл</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200"
                  to="/contact"
                >
                  <span className="select-none">Холбогдох</span>
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
