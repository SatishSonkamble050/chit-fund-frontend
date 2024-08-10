import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChartComponent = ({ data }) => {
  const chartData = {
    labels: ['Paid', 'Due'],
    datasets: [
      {
        data: [data.paid, data.due],
        backgroundColor: ['#4CAF50', '#F44336'],
        borderColor: ['#ffffff', '#ffffff'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h3 className="text-lg font-semibold mb-4">Payment Status</h3>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChartComponent;
