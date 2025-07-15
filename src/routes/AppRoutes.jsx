import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import NotFound from '../components/NotFound_Page/NotFound';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddVehicle from '../pages/AddVehicle';
import HomePage from '../pages/HomePage/HomePage';
import BatchProcessing from '../pages/BatchProcessing/BatchProcessing';
import BillingAssistance from '../pages/BillingAssistance/BillingAssistance';
import CustomerDirectory from '../pages/CustomerDirectory/CustomerDirectory';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/processes/batch" element={<BatchProcessing />} /> */}
        <Route path="/processes/billing" element={<BillingAssistance />} />
        {/* <Route path="/customers/directory" element={<CustomerDirectory />} /> */}

       
      </Route>
      <Route path="*" element={<NotFound />} />
      {/* Auth routes outside layout */}
      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> */}
    </Routes>
  );
};

export default AppRoutes;
