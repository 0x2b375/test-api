/* eslint-disable no-unused-vars */
import React from 'react';
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();


  return (
    <div className='flex flex-col h-screen '>
      <h1 className='m-auto text-3xl'>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
