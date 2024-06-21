import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  }
  return (
    <div className='flex flex-col h-screen'>
      <section className='hero bg-gray-100 p-10 text-center'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4 mt-14'>Welcome to My IoT Home Page</h1>
        <p className='text-xl text-gray-600 mb-8'>Monitor and manage your IoT devices in real-time.</p>
        <button className='bg-slate-700 text-white px-4 py-2 rounded hover:bg-white hover:text-gray-900' onClick={handleGetStarted}>Get Started</button>
      </section>

      <section className='features p-10 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='feature p-4 border rounded'>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>Real-time Monitoring</h2>
          <p className='text-gray-600'>Keep track of your devices with live data updates.</p>
        </div>
        <div className='feature p-4 border rounded'>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>Device Management</h2>
          <p className='text-gray-600'>Manage all your IoT devices from a single platform.</p>
        </div>
        <div className='feature p-4 border rounded'>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>Advanced Analytics</h2>
          <p className='text-gray-600'>Gain insights from your device data with our analytics tools.</p>
        </div>
      </section>

      <section className='recent-activity p-10 bg-gray-100'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>TEST</h2>
        <p className='text-gray-600'>No recent activity.</p>
      </section>

    
    </div>
  );
}


export default Home