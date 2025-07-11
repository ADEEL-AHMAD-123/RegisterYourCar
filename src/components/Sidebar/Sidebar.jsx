import React, { useState } from 'react';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaCar,
  FaChevronDown,
  FaChevronUp,
  FaUsers,
} from 'react-icons/fa';

const sidebarItems = [
  {
    title: 'Dashboard',
    icon: <FaTachometerAlt />,
    path: '/',
  },
  {
    title: 'Vehicles',
    icon: <FaCar />,
    subMenu: [
      { title: 'All Vehicles', path: '/vehicles' },
      { title: 'Add New', path: '/vehicle/add' },
    ],
  },
  {
    title: 'Users',
    icon: <FaUsers />,
    path: '/users',
  },
];

const Sidebar = ({ isOpen, closeSidebar }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
      <nav className="menu">
        <button className="close-sidebar" onClick={closeSidebar}>×</button>

        {sidebarItems.map((item) => (
          <div className="menu-item" key={item.title}>
            {item.subMenu ? (
              <>
                <div className="menu-heading" onClick={() => toggleMenu(item.title)}>
                  <div className="left">
                    <span className="icon">{item.icon}</span>
                    <span className="label">{item.title}</span>
                  </div>
                  <span className="arrow">
                    {openMenus[item.title] ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>

                <div className={`sub-menu ${openMenus[item.title] ? 'open' : ''}`}>
                  {item.subMenu.map((sub) => (
                    <NavLink to={sub.path} key={sub.title} className="sub-item">
                      {sub.title}
                    </NavLink>
                  ))}
                </div>
              </>
            ) : (
              <NavLink to={item.path} className="menu-link">
                <span className="icon">{item.icon}</span>
                <span className="label">{item.title}</span>
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
