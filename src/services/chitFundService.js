// src/services/chitFundService.js
import api from './api';

// Add User
export const addUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

// Add Chit Fund
export const addChitFund = async (chitFundData) => {
  try {
    const response = await api.post('/chit-funds', chitFundData);
    return response;
  } catch (error) {
    console.error('Error adding chit fund:', error);
    throw error;
  }
};

// Add User to Chit Fund
export const addUserToChitFund = async (chitFundId, userData) => {
  try {
    const response = await api.post(`/chit-funds/${chitFundId}/members`, userData);
    return response.data;
  } catch (error) {
    console.error('Error adding user to chit fund:', error);
    throw error;
  }
};

// Add Transaction
export const addTransaction = async (transactionData) => {
  try {
    const response = await api.post('/transactions', transactionData);
    return response.data;
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw error;
  }
};

// Get all chit fund list particulure organzation :
export const getAllChit = async (id) => {
  try {
    const response = await api.get(`/chit-funds/organization/${id}`);
    return response;
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw error;
  }
};


// get all user in particular organzation -----------

export const getAllUsers = async (id) => {
  try {
    const response = await api.get(`users/organization/${id}`);
    return response;
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw error;
  }
};



// Add member in to chit -----------
export const addMemberToChit = async (data) => {
  try {
    const response = await api.post(`/chit-funds/add-member`, data);
    return response;
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw error;
  }
};

// Remove the member from chit fund ---------------------
export const removeMemberFromChitFund = async (data) => {
  const {chitId, memberId} = data
  try {
    const response = await api.delete(`/chit-funds/${chitId}/member/${memberId}`, data);
    return response;
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw error;
  }
};


// Tranaction ------

// getting the list of all month from start to end month of chit----- 
export const getMInthlyChitListService = async (id) => {
  try {
    const response = await api.get(`/chit-funds/chit-fund-payments/${id}`);
    return response;
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw error;
  }
};


// create a tranaaction ---------

export const createTransactionSerivce = async (data) => {
  const {chitId, memberId} = data
  try {
    const response = await api.post(`/transactions`,data);
    return response;
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw error;
  }
};



// geting data of particular month members are paid or not -----------------

export const getMembersMonthlyPaymentData = async (data) => {
  try {
    const response = await api.post(`/chit-funds/member-payment-status`, data);
    return response;
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw error;
  }
};

