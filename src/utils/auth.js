// src/utils/auth.js
import {jwtDecode} from 'jwt-decode';


export const setToken = (token) => {
    localStorage.setItem('authToken', token);
  };
  
  export const getToken = () => {
    return localStorage.getItem('authToken');
  };
  
  export const removeToken = () => {
    localStorage.removeItem('authToken');
  };
  
  export const isAuthenticated = () => {
    return !!getToken(); // Check if the token exists
  };
  
  // Function to get the token ID or any other claim from the JWT
export const getTokenId = () => {
    const token = getToken();
    console.log("TOKEN : ", token)
    if (token) {
      try {
        const decoded = jwtDecode(token);
        // Replace 'id' with the actual claim you want to extract
        return decoded.id;
      } catch (error) {
        console.error('Invalid token');
        return null;
      }
    }
    return null;
  };