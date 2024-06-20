import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ sidebarToggle }) => {
  return (
    <div className="w-full relative z-40">
      <footer className="transition-all duration-300 flex justify-between items-center bg-slate-800 text-white w-full">
        <div className='flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 p-5 text-center md:justify-between'>
          <p className='text-lg font-bold text-white'>
            &copy; {new Date().getFullYear()} Дадлага Вэб
          </p>
          <ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
            <li className="mr-4">
              <a href='/privacy-policy' className="text-white no-underline hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 rounded-md p-1 transition-all duration-300">Нууцлалын бодлого</a>
            </li>
            <li className="mr-4">
              <a href='/terms-of-service' className="text-white no-underline hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 rounded-md p-1 transition-all duration-300">Үйлчилгээний нөхцөл</a>
            </li>
            <li className="mr-4">
              <a href='/contact' className="text-white no-underline hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 rounded-md p-1 transition-all duration-300">Холбогдох</a>
            </li>
          </ul>
          <div className='flex items-center'>
            <a href='https://www.facebook.com' className='text-white no-underline ml-4' aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href='https://www.twitter.com' className='text-white no-underline ml-4' aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Footer;
