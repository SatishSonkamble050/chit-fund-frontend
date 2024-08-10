import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChartComponent = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Due Amount',
        data: data.dueAmounts,
        backgroundColor: '#F44336',
        borderColor: '#ffffff',
        borderWidth: 1,
      },
      {
        label: 'Paid Amount',
        data: data.paidAmounts,
        backgroundColor: '#4CAF50',
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h3 className="text-lg font-semibold mb-4">Chit Fund Status</h3>
      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default BarChartComponent;
