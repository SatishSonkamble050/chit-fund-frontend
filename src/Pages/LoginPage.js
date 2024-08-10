import React, { useState } from 'react';
import { useAuth } from './../components/auth/AuthContext'
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

const LoginPage = () => {
//   const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async() => {
    // Basic validation; replace with actual authentication logic
    if (username && password) {
        const data = {adminUsername : username, adminPassword : password}
        await login(data);
      navigate('/');
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-md w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mb-4 w-full"
        />
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
