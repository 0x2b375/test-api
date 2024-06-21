/* eslint-disable no-unused-vars */
import React from 'react';
import {Chart as ChartJs} from 'chart.js/auto'
import {Bar, Doughnut, Line} from 'react-chartjs-2'

const Dashboard = () => {
  return (
    <div className='flex flex-row h-screen w-full justify-center content-center gap-[2vw] flex-wrap '>
      <div className="dataCard revenueCard border rounded-lg w-[94%] h-[20rem] bg-[#efefef] p-4 shadow-md flex justify-center items-center">Chart 1</div>

      <div className="dataCard customerCard border rounded-lg w-[50%] h-[20rem] bg-[#efefef] p-4 shadow-md flex justify-center items-center">
        <Bar 
          data={{
            labels: ["A", "B", "C"],
            datasets: [
              {
              label: 'Revenue',
              data: [200, 300, 400]
              },
              {
              label: 'Loss',
              data: [90, 80, 70]
              },
           ],
          }}
        />
      </div>

      <div className="dataCard categoryCard border rounded-lg w-[42%] h-[20rem] bg-[#efefef] p-4 shadow-md flex justify-center items-center">Chart 3</div>
    </div>
  );
}

export default Dashboard;
