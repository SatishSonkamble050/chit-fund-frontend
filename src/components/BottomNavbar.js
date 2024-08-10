// src/components/BottomNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserPlus, FaWallet, FaExchangeAlt } from 'react-icons/fa';

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-gray-800 text-white flex justify-around items-center p-2 md:hidden">
      <Link to="/" className="flex flex-col items-center">
        <FaHome className="text-2xl" />
        <span className="text-xs">Home</span>
      </Link>
      <Link to="/users" className="flex flex-col items-center">
        <FaUserPlus className="text-2xl" />
        <span className="text-xs">Add User</span>
      </Link>
      <Link to="/chit-funds" className="flex flex-col items-center">
        <FaWallet className="text-2xl" />
        <span className="text-xs">Add Chit Fund</span>
      </Link>
      <Link to="/transactions" className="flex flex-col items-center">
        <FaExchangeAlt className="text-2xl" />
        <span className="text-xs">Transactions</span>
      </Link>
      <Link to="/all-chit" className="flex flex-col items-center">
        <FaWallet className="text-2xl" />
        <span className="text-xs">all chit</span>
      </Link>
    </nav>
  );
};

export default BottomNavbar;
