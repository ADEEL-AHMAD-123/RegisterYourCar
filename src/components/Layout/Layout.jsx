import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className={`app-layout ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
