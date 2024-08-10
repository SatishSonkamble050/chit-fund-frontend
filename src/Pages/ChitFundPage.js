// src/pages/ChitFundPage.js
import React from 'react';
import AddChitFundForm from '../components/AddChitFundForm';

const ChitFundPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Chit Funds</h1>
      <AddChitFundForm />
    </div>
  );
};

export default ChitFundPage;
