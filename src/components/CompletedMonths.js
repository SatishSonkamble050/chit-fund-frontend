// src/components/CompletedMonths.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompletedMonths = ({ completedMonths, chitID }) => {
    const navigate = useNavigate()
    const onMonthClick = (month)=>{
        navigate('/monthly-details', {state : {month, chitID}})
    }
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Completed Months</h3>
      <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="p-2 text-left">Month</th>
            <th className="p-2 text-left">Amount</th>
            <th className="p-2 text-left">Due</th>
          </tr>
        </thead>
        <tbody>
          {completedMonths.map((month, index) => (
            <tr key={index} className="border-b border-gray-200" onClick={() => onMonthClick(month)} >
              <td className="p-2">{month.year} {month.month} </td>
              <td className="p-2 "><span className='bg-green-600 text-white p-2'>Rs.{month.paidAmount}</span></td>
              <td className="p-2 "><span className='bg-red-600 text-white p-2'>Rs.{month.dueAmount}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompletedMonths;
