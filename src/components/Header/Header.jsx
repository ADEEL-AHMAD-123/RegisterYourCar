import React from 'react';
import './Header.scss';
import { FaBell, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="main-header">
      <div className="header-inner">
        <div className="header-left">
          <button className="hamburger" onClick={toggleSidebar} aria-label="Toggle Sidebar">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className="logo">
            <span className="line-1">Zulassungs</span>
            <span className="line-2">BeastPro</span>
          </div>
        </div>

        <div className="header-right">
          <div className="notification-icon">
            <FaBell />
            <span className="badge" />
          </div>

          <div className="profile-inline">
            <img src="/avatar.png" alt="avatar" className="avatar" />
            <div className="info">
              <div className="name">Adeel</div>
              <div className="role">Admin</div>
            </div>
          </div>

          <button className="logout-btn">
            <FaSignOutAlt className="logout-icon" />
            <span className="label">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
