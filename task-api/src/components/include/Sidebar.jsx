import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons/faMicrochip'
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
                  className="flex items-center gap-3 rounded py-3 pl-3 pr-4 text-gray-50 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200"
                  to="/"
                >
                  <FontAwesomeIcon icon={faHome} />
                  <span className="select-none">Нүүр Хуудас</span>
                  
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-3 rounded py-3 pl-3 pr-4 text-gray-50 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200"
                  to="/devices"
                >
                  <FontAwesomeIcon icon={faMicrochip} />
                  <span className="select-none">Төхөөрөмж</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-3 rounded py-3 pl-3 pr-4 text-gray-50 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200"
                  to="/about"
                >
                  <FontAwesomeIcon icon={faCircleInfo} />
                  <span className="select-none">Мэдээлэл</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-3 rounded py-3 pl-3 pr-4 text-gray-50 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200"
                  to="/contact"
                >
                  <FontAwesomeIcon icon={faPhone} />
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
