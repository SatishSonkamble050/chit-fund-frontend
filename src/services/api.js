// src/services/api.js
import axios from 'axios';
import { getToken } from '../utils/auth';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Update with your backend URL
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally (e.g., redirect to login on 401)
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access, e.g., redirect to login
    }
    return Promise.reject(error);
  }
);

export default api;
