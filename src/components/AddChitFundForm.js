// src/components/AddChitFundForm.js
import React, { useState, useEffect } from "react";
import { getTokenId } from "../utils/auth";
import { addChitFund } from "../services/chitFundService";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { addChitFund } from '../redux/chitFundSlice';

const AddChitFundForm = () => {
  //   const dispatch = useDispatch();
  const adminId = getTokenId();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    duration: "", // Duration in months
    startDate: "",
    endDate: "",
    organizationId: adminId,
    members : []
  });

  useEffect(() => {
    if (formData.startDate && formData.duration) {
      const calculateEndDate = () => {
        const start = new Date(formData.startDate);
        const end = new Date(
          start.setMonth(start.getMonth() + parseInt(formData.duration))
        );
        return end.toISOString().split("T")[0]; // Format to yyyy-mm-dd
      };

      setFormData((prevState) => ({
        ...prevState,
        endDate: calculateEndDate(),
      }));
    }
  }, [formData.startDate, formData.duration]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const resp = await addChitFund(formData)
    console.log("RESPONE : ", resp)
    if(resp.status === 200){
      navigate('/')
    }

    setFormData({
      name: "",
      amount: "",
      duration: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Add Chit Fund</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Chit Fund Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-700"
          >
            Duration (Months)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-700"
          >
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-700"
          >
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Chit Fund
        </button>
      </form>
    </div>
  );
};

export default AddChitFundForm;
