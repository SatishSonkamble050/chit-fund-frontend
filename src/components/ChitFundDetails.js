// src/components/ChitFundDetails.js
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { FaUsers, FaCalendarCheck } from 'react-icons/fa';
import CompletedMonths from './CompletedMonths'; // Import CompletedMonths component
import ChitFundMembers from './ChitFundMembers';   // Import ChitFundMembers component

const ChitFundDetails = () => {
  const { id } = useParams(); // Get the chit fund ID from the URL
  const { state } = useLocation(); // Get state from the location object
  console.log("STATE ......: ", state)
  const [chitFund, setChitFund] = useState(null);
  const [activeTab, setActiveTab] = useState('completedMonths');
  const [completedMonths, setCompletedMonths] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    if (state?.chitFund) {
      // Use passed data
      setChitFund(state.chitFund);
      // Mock data for demonstration
      setCompletedMonths([
        { month: 'January 2024', amount: 5000 },
        { month: 'February 2024', amount: 5000 },
        { month: 'March 2024', amount: 5000 },
      ]);
      // setMembers([
      //   { name: 'John Doe', contribution: 5000 },
      //   { name: 'Jane Smith', contribution: 5000 },
      //   { name: 'Alice Johnson', contribution: 5000 },
      // ]);
      setMembers(state.chitFund.members)  
    } else {
      // Fetch data if not passed
      const fetchChitFundDetails = async () => {
        // Replace with actual API call
        const response = await fetch(`/api/chit-funds/${id}`);
        const data = await response.json();
        setChitFund(data);
        // Mock data for demonstration
        setCompletedMonths([
          { month: 'January 2024', amount: 5000 },
          { month: 'February 2024', amount: 5000 },
          { month: 'March 2024', amount: 5000 },
        ]);
        setMembers([
          { name: 'John Doe', contribution: 5000 },
          { name: 'Jane Smith', contribution: 5000 },
          { name: 'Alice Johnson', contribution: 5000 },
        ]);
      };

      fetchChitFundDetails();
    }
  }, [id, state]);

  const handleAddMember = (memberName) => {
    setMembers([...members, memberName]);
  };

  const handleRemoveMember = (memberName) => {
    setMembers(members.filter(member => member !== memberName));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Chit Fund Details</h2>
      {chitFund ? (
        <>
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setActiveTab('completedMonths')}
              className={`p-2 ${activeTab === 'completedMonths' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              <FaCalendarCheck className="inline-block mr-1" />
              Completed Months
            </button>
            <button
              onClick={() => setActiveTab('members')}
              className={`p-2 ${activeTab === 'members' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              <FaUsers className="inline-block mr-1" />
              Members
            </button>
          </div>

          {activeTab === 'completedMonths' && (
            <CompletedMonths completedMonths={completedMonths} /> // Use CompletedMonths component
          )}

          {activeTab === 'members' && (
             <ChitFundMembers
             members={members}
             memberData = {chitFund.members}
             chitID = {chitFund._id}
             onAddMember={handleAddMember}
             onRemoveMember={handleRemoveMember}
           />
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ChitFundDetails;
