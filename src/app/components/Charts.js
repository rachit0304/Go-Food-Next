import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Total Orders',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(75,192,192,0.4)',
      hoverBorderColor: 'rgba(75,192,192,1)',
      data: [65, 59, 80, 81, 56, 55],
    },
    {
      label: 'Revenue Generated',
      backgroundColor: 'rgba(153,102,255,1)',
      borderColor: 'rgba(153,102,255,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(153,102,255,0.4)',
      hoverBorderColor: 'rgba(153,102,255,1)',
      data: [28, 48, 40, 19, 86, 27],
    },
  ],
};

const Charts = () => {
  return (
    <div>
      <h2>Charts</h2>
      <div className="chart-container">
        <Bar
          data={data}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
      <div className="chart-container mt-4">
        <Line
          data={data}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};

export default Charts;