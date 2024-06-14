// Footer.jsx
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='flex justify-between items-center bg-slate-800 text-white p-4'>
      <div className='footer-left'>
        <p className='text-lg font-bold text-white'>
          &copy; {new Date().getFullYear()} ДадлагаВэб
        </p>
      </div>
      <div className='footer-center'>
        <ul className='flex m-0 p-0 list-none'>
          <li className="mr-4">
            <a href='/privacy-policy' className="text-white no-underline">Нууцлалын бодлого</a>
          </li>
          <li className="mr-4">
            <a href='/terms-of-service' className="text-white no-underline">Үйлчилгээний нөхцөл</a>
          </li>
          <li className="mr-4">
            <a href='/contact' className="text-white no-underline">Холбогдох</a>
          </li>
        </ul>
      </div>
      <div className='flex items-center'>
        <a href='https://www.facebook.com' className='text-white no-underline ml-4' aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href='https://www.twitter.com' className='text-white no-underline ml-4' aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
