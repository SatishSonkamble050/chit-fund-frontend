// src/pages/UserPage.js
import React from 'react';
import AddUserForm from '../components/AddUserForm';

const UserPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <AddUserForm />
    </div>
  );
};

export default UserPage;
