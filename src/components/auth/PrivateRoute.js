// src/components/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getToken } from '../utils/auth';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!getToken();

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
