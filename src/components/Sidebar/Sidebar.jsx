import React, { useState } from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaClipboard,
  FaChevronDown,
  FaChevronUp,
  FaUsers,
  FaFileInvoice,
  FaCog,
  FaTimes,
  FaSignOutAlt
} from "react-icons/fa";

const sidebarItems = [
  { title: "Home", icon: <FaHome />, path: "/" },
  {
    title: "Processes",
    icon: <FaClipboard />,
    subMenu: [
      { title: "Overview", path: "/processes/overview" },
      { title: "Batch processing", path: "/processes/batch" },
      { title: "Billing assistance", path: "/processes/billing" },
    ],
  },
  {
    title: "Customers",
    icon: <FaUsers />,
    subMenu: [
      { title: "Customer directory", path: "/customers/directory" },
      { title: "Permanent powers of attorney", path: "/customers/power" },
    ],
  },
  { title: "Invoices", icon: <FaFileInvoice />, path: "/invoices" },
  { title: "Settings", icon: <FaCog />, path: "/settings" },
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
    <aside className={`sidebar ${isOpen ? "active" : ""}`}>
      <button
        className="close-sidebar"
        onClick={closeSidebar}
        aria-label="Close Sidebar"
      >
        <FaTimes />
      </button>
      <nav className="menu">
        {sidebarItems.map((item) => (
          <div className="menu-item" key={item.title}>
            {item.subMenu ? (
              <>
                <div
                  className="menu-heading"
                  onClick={() => toggleMenu(item.title)}
                >
                  <div className="left">
                    <span className="icon">{item.icon}</span>
                    <span className="label">{item.title}</span>
                  </div>
                  <span className="arrow">
                    {openMenus[item.title] ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                </div>
                <div
                  className={`sub-menu ${openMenus[item.title] ? "open" : ""}`}
                >
                  {item.subMenu.map((sub) => (
                    <NavLink to={sub.path} key={sub.title} className="sub-item">
                      {sub.title}
                    </NavLink>
                  ))}
                </div>
              </>
            ) : (
              <NavLink to={item.path} className="menu-link">
                <div className="left">
                  <span className="icon">{item.icon}</span>
                  <span className="label">{item.title}</span>
                </div>
              </NavLink>
            )}
          </div>
        ))}
      </nav>
      <div className="mobile-logout">
  <button className="logout-btn">
    <FaSignOutAlt className="icon" />
    <span>Logout</span>
  </button>
</div>
    </aside>
  );
};

export default Sidebar;
