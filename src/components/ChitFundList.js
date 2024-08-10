// src/components/ChitFundList.js
import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchChitFunds } from '../redux/chitFundSlice';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa'; // Eye icon for the view button
import { mockChitFunds } from './mockChitFunds';
import { useNavigate } from 'react-router-dom';
import { getAllChit } from '../services/chitFundService';
import { getTokenId } from '../utils/auth';

const ChitFundList = () => {
//   const dispatch = useDispatch();
//   const { chitFunds, status, error } = useSelector((state) => state.chitFunds);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchChitFunds());
//     }
//   }, [dispatch, status]);

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'failed') {
//     return <div>Error: {error}</div>;
//   }

const [chitFunds, setChitFunds] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const adminId = getTokenId()

  const getChitList = async() =>{
    const resp = await getAllChit(adminId)
    if(resp.status === 200){
      setChitFunds(resp.data)
      setStatus('succeeded')
    }
  }

  useEffect(() => {
    // Simulate fetching data
    setStatus('loading');
    try {
      getChitList()
    } catch (error) {
      setError(error.message);
      setStatus('failed');
    }
  }, []);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }


  const getStatusLabel = (chitFund) => {
    const now = new Date();
    const startDate = new Date(chitFund.startDate);
    const endDate = new Date(chitFund.endDate);

    if (now < startDate) {
      return 'Not Started';
    } else if (now > endDate) {
      return 'Completed';
    } else {
      return 'Active';
    }
  };

  const handleViewClick = (chitFund) => {
    navigate(`/chit-details`, { state: { chitFund } });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Chit Funds List</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="p-2 text-left">Chit Fund Name</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Due Amount</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {chitFunds.map((chitFund) => (
            <tr key={chitFund._id} className="border-b border-gray-200">
              <td className="p-2">{chitFund.name}</td>
              <td className="p-2">{getStatusLabel(chitFund)}</td>
              <td className="p-2">${chitFund.amount}</td>
              <td className="p-2">
                {/* <Link to={`/chit-fund/${chitFund._id}`}>
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEye className="inline-block mr-1" />
                    View
                  </button>
                </Link> */}
                <button
                  onClick={() => handleViewClick(chitFund)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaEye className="inline-block mr-1" />
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChitFundList;
