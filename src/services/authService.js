// src/services/authService.js
import api from './api'; // Import the Axios instance with interceptors

// Login Service
export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/organization/login', credentials);
    const { token } = response.data;

    // Store token in local storage or a secure storage solution
    localStorage.setItem('authToken', token);

    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
