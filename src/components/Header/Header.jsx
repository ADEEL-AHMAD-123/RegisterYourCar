import React, { useState } from 'react';
import './Header.scss';
import { FaBell, FaChevronDown, FaSignOutAlt, FaBars } from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <header className="main-header">
      <div className="header-inner">
        {/* Left: Hamburger + Logo */}
        <div className="header-left">
        <button className="hamburger" onClick={toggleSidebar} aria-label="Toggle Sidebar">
  <FaBars />
</button>

          <div className="logo">CarReg</div>
        </div>

        {/* Right: Notification + Profile */}
        <div className="header-right">
          <div className="notification-icon">
            <FaBell />
          </div>

          <div className="profile" onClick={toggleDropdown}>
            <img src="/avatar.png" alt="avatar" className="avatar" />
            <div className="profile-info">
              <div className="name">Adeel</div>
              <div className="role">Admin</div>
            </div>
            <FaChevronDown className={`chevron ${dropdownOpen ? 'open' : ''}`} />
            {dropdownOpen && (
              <div className="dropdown">
                <button className="logout-btn">
                  <FaSignOutAlt className="logout-icon" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative colored bar */}
      <div className="header-bar"></div>
    </header>
  );
};

export default Header;
