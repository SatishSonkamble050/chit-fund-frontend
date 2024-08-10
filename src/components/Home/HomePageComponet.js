
import React from 'react';
import { Link } from 'react-router-dom';
import CardComponent from './CardComponent';
import PieChartComponent from './PieChartComponent';
import BarChartComponent from './BarChartComponent';

const HomePageComponet = () => {
    const userCount = 120;
  const chitFundCount = 15;
  const pieChartData = { paid: 50000, due: 20000 };
  const barChartData = {
    labels: ['Chit 1', 'Chit 2', 'Chit 3'],
    dueAmounts: [2000, 3000, 1500],
    paidAmounts: [1000, 1500, 1000],
  };
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome to Chit Fund Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
          <p className="mb-4">Add, edit, and manage users participating in your chit fund.</p>
          <Link to="/users">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Go to Users
            </button>
          </Link>
        </div>
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-2">Manage Chit Funds</h2>
          <p className="mb-4">Create and manage your chit fund plans and monitor their progress.</p>
          <Link to="/chit-funds">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Go to Chit Funds
            </button>
          </Link>
        </div>
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-2">View Transactions</h2>
          <p className="mb-4">Track all transactions related to your chit funds.</p>
          <Link to="/transactions">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              View Transactions
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <CardComponent title="Total Users" count={userCount} />
        <CardComponent title="Total Chit Funds" count={chitFundCount} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <PieChartComponent data={pieChartData} />
        <BarChartComponent data={barChartData} />
      </div>
    </div>
  );
};

export default HomePageComponet;
