// src/components/MonthDetails.js
import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaEye, FaTimesCircle } from "react-icons/fa"; // Icons for status
import TransactionPopup from "./TransactionPopup";
import { getMembersMonthlyPaymentData } from "../services/chitFundService";
import { useLocation } from "react-router-dom";
import { monthConverte } from "../utils/monthConvert";
const MonthDetails = () => {
  const { state } = useLocation();
  const { month, chitID } = state;
  console.log("STATE data : ", state);
  const [allData, setAllData] = useState({});
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    async function getMemberPaymentList() {
      const data = {
        chitFundId: chitID,
        month: monthConverte(month.month),
        year: month.year,
      };

      const resp = await getMembersMonthlyPaymentData(data);
      console.log(resp);
      if (resp.status === 200) {
        setAllData(resp.data);
        setMonthlyData(resp.data.memberStatuses);
      }
    }

    getMemberPaymentList();
  }, []);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">{month.month}</h3>
      <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Amount Paid</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {monthlyData?.map((member, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 cursor-pointer hover:bg-gray-100"
              onClick={() => handleUserClick(member)}
            >
              <td className="p-2">{member.name}</td>
              <td className="p-2">${member.paidAmount}</td>
              <td className="p-2">
                {member.paidStatus == "Paid" ? (
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
        <TransactionPopup
          user={selectedUser}
          onClose={handleClosePopup}
          chitID={allData.chitId}
          month = {month}
          orgID={allData.organizationId}
        />
      )}
    </div>
  );
};

export default MonthDetails;
