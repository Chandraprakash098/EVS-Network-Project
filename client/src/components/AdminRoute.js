import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  const isAuthenticated = localStorage.getItem('adminToken') !== null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin" replace />;
};

export default AdminRoute;