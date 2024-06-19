import React from 'react'
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-700">
      <img src="https://github.com/SAWARATSUKI/KawaiiLogos/blob/main/ResponseCode/404%20NotFound.png?raw=true" alt="" className='w-4' draggable={false}/>
      <p className="text-lg mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 hover:underline">
          Go back to Home
      </Link>
  </div>
  )
}

export default NotFoundPage