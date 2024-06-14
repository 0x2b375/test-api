import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const header = () => {
  return (
    <nav className='flex justify-between items-center bg-gray-800 text-white p-4'>
      <div className='navbar-left '>
        <a href='/' className='text-2xl font-bold text-white no-underline'>
          ДадлагаВэб
        </a>
      </div>
      <div className='navbar-center'>
        <ul className='flex m-0 p-0 list-none'>
          <li className="mr-4">
            <a href='/products'>Төхөөрөмж</a>
          </li >
          <li className="mr-4">
            <a href='/about'>Бидний тухай</a>
          </li>
          <li className="mr-4">
            <a href='/contact' className="text-white no-underline">Холбогдох</a>
          </li>
        </ul>
      </div>
      <div className='flex items-center'>
        <a href='/account' className='text-white no-underline ml-4 relative'>
          <FontAwesomeIcon icon={faUser} />
        </a>
      </div>
    </nav>
  );
};

export default header;
