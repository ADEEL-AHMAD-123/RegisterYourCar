import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddVehicle from '../pages/AddVehicle';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/vehicle/add" element={<AddVehicle />} />
      </Route>
      
      {/* Auth routes outside layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
