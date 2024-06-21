import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const navigate = useNavigate();
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Mock data for demonstration
    const mockLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
    const mockData = [65, 59, 80, 81, 56, 55];

    // Initialize Chart.js chart
    const ctx = document.getElementById('myChart');
    if (ctx) {
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: mockLabels,
          datasets: [{
            label: 'IoT Data',
            data: mockData,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      // Update state with chart instance
      setChartData(myChart);
    }

    // Clean up chart instance on component unmount
    return () => {
      if (chartData) {
        chartData.destroy();
      }
    };
  }, [chartData]);

  const handleGetStarted = () => {
    navigate('/signup');
  };

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
          <canvas id='myChart' width='400' height='200'></canvas>
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
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Recent Activity</h2>
        <p className='text-gray-600'>No recent activity.</p>
      </section>
    </div>
  );
};

export default Dashboard;
