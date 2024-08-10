// src/components/MonthDetails.js
import React, { useState } from "react";
import { FaCheckCircle, FaEye, FaTimesCircle } from "react-icons/fa"; // Icons for status
import TransactionPopup from "./TransactionPopup";

const MonthDetails = ({ month, members }) => {
  const monthlyData = {
    month: "January 2024",
    members: [
      {
        name: "John Doe",
        paid: true,
        amountPaid: 5000,
        transactions: [{ amount: 5000, paidDate: "2024-01-05" }],
      },
      { name: "Jane Smith", paid: false, amountPaid: 0, transactions: [] },
      {
        name: "Alice Johnson",
        paid: true,
        amountPaid: 5000,
        transactions: [{ amount: 5000, paidDate: "2024-01-10" }],
      },
    ],
  };

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">{monthlyData.month}</h3>
      <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Amount Paid</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {monthlyData.members.map((member, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 cursor-pointer hover:bg-gray-100"
              onClick={() => handleUserClick(member)}
            >
              <td className="p-2">{member.name}</td>
              <td className="p-2">${member.amountPaid}</td>
              <td className="p-2">
                {member.paid ? (
                  <span className="text-green-500 flex items-center">
                    <FaCheckCircle className="mr-1" />
                    Paid
                  </span>
                ) : (
                  <span className="text-red-500 flex items-center">
                    <FaTimesCircle className="mr-1" />
                    Due
                  </span>
                )}
              </td>
              <td className="p-2">
                <FaEye className="text-blue-500 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <TransactionPopup user={selectedUser} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default MonthDetails;
