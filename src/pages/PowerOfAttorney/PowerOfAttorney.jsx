import React, { useState } from 'react';
import './PowerofAttorney.scss';

const powerData = [
  {
    id: 1,
    companyName: "Acme Corp",
    customerNumber: "CUST-00123",
    address: "123 Market Street, Springfield",
    endDate: "2025-12-31",
    status: "Active",
  },
  {
    id: 2,
    companyName: "Globex Inc.",
    customerNumber: "CUST-00987",
    address: "456 Elm Street, Metropolis",
    endDate: "2024-06-15",
    status: "Expired",
  },
];

const statuses = ["All", "Active", "Expired", "Pending"];

const PowerOfAttorney = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const filteredData = powerData.filter((item) => {
    return (
      (selectedStatus === '' || selectedStatus === 'All' || item.status === selectedStatus) &&
      item.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="power-of-attorney page-container">
      <h1 className="page-title">Durable powers of attorney</h1>
      <div className="filters-bar">
        <div className="filter-wrapper">
          <div className="floating-input active">
            <input
              type="text"
              placeholder="Search by company name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <label>Search</label>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className={`floating-input ${selectedStatus ? 'active' : ''}`}>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="" disabled hidden>Select Status</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <label>Status</label>
          </div>
        </div>
      </div>

      <div className="process-table-wrapper">
        <div className="table-scroll">
          <table className="process-table">
            <thead>
              <tr>
                <th>Company name</th>
                <th>Customs wholesale customer number</th>
                <th>Address</th>
                <th>Power of attorney end date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr className="main-row" key={index}>
                  <td>{item.companyName}</td>
                  <td>{item.customerNumber}</td>
                  <td>{item.address}</td>
                  <td>{item.endDate}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PowerOfAttorney;
