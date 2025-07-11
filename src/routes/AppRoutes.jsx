import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import NotFound from '../components/NotFound_Page/NotFound';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddVehicle from '../pages/AddVehicle';
import HomePage from '../pages/HomePage/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/vehicle/add" element={<AddVehicle />} /> */}
       
      </Route>
      <Route path="*" element={<NotFound />} />
      {/* Auth routes outside layout */}
      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> */}
    </Routes>
  );
};

export default AppRoutes;
