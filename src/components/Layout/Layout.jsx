import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Lock scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
  }, [isSidebarOpen]);

  // Close sidebar automatically on route change
  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <div className={`app-layout ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      {isSidebarOpen && <div className="backdrop-overlay" onClick={closeSidebar} />}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
