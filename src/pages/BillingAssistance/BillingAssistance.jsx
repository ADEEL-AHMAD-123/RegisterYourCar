import React, { useState } from 'react';
import './BillingAssistance.scss';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const billingData = [
  {
    id: 1,
    customer: "John Doe (123456)",
    costCenter: "Marketing (MKT-01)",
    occurrence: "Monthly",
    includedFees: "Yes",
    number: "INV-0001",
  },
  {
    id: 2,
    customer: "Jane Smith (654321)",
    costCenter: "Development (DEV-02)",
    occurrence: "Quarterly",
    includedFees: "No",
    number: "INV-0002",
  },
];

const years = ['2022', '2023', '2024', '2025'];

const BillingAssistance = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  return (
    <div className="billing-assistance page-container">
      <h1 className="page-title">Billing assistance</h1>
      <div className="filters-bar">
        <div className="filter-wrapper">
          <div className="floating-input">
            <label htmlFor="month">Month</label>
            <select
              id="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="" disabled hidden>Select Month</option>
              {months.map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="floating-input">
            <label htmlFor="year">Year</label>
            <select
              id="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="" disabled hidden>Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="process-table-wrapper">
  <div className="table-scroll">
    <table className="process-table">
      <thead>
        <tr>
          <th>Customer (customer number)</th>
          <th>Cost center (cost center number)</th>
          <th>Occurrence</th>
          <th>Included fees</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
        {billingData.map((item, index) => (
          <tr className="main-row" key={index}>
            <td>{item.customer}</td>
            <td>{item.costCenter}</td>
            <td>{item.occurrence}</td>
            <td>{item.includedFees}</td>
            <td>{item.number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
};

export default BillingAssistance;
