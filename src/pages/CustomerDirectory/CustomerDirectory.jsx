import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerDirectory.scss';

const CustomerDirectory = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    {
      companyName: 'Acme Corp',
      customerNumber: 'C1023',
      contactPerson: 'Alice Johnson',
      phoneNumber: '+123456789',
      address: '123 Main Street, NY',
    },
    {
      companyName: 'Beta Ltd.',
      customerNumber: 'C2045',
      contactPerson: 'Bob Smith',
      phoneNumber: '+987654321',
      address: '456 Park Ave, CA',
    },
  ];

  const filtered = customers.filter(c =>
    c.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="customer-directory page-container">
      <div className="header">
        <h1>Customer Directory</h1>

        <div className="filters">
          <div className="search-wrapper">
            <label>Search</label>
            <input
              type="text"
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="add-customer-btn" onClick={() => navigate('/client/create')}>
            Add Customer
          </button>
        </div>
      </div>

      <p className="mobile-scroll-note">Scroll sideways to see full table</p>

      <div className="table-wrapper">
        <table className="directory-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Customer Number</th>
              <th>Contact Person</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, idx) => (
              <tr key={idx}>
                <td>{c.companyName}</td>
                <td>{c.customerNumber}</td>
                <td>{c.contactPerson}</td>
                <td>{c.phoneNumber}</td>
                <td>{c.address}</td>
                <td><button className="view-btn">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CustomerDirectory;
