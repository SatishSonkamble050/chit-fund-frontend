// src/components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="bg-blue-500 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Chit Fund App</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Transactions</a></li>
            <li><a href="#" className="hover:underline">Users</a></li>
            <li><a href="#" className="hover:underline">Chit Funds</a></li>
          </ul>
        </nav>
      </header> */}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      {/* <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Chit Fund Management</p>
      </footer> */}
    </div>
  );
};  

export default Layout;
