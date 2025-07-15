import React, { useState } from 'react';
import './BillingAssistance.scss';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const years = [2022, 2023, 2024, 2025];

const tableData = [
  {
    customer: 'John Doe (C1234)',
    costCenter: 'IT Dept (CC001)',
    occurrence: 'Monthly',
    includedFees: '€200',
    number: 'INV-0987',
  },
  {
    customer: 'Jane Smith (C5678)',
    costCenter: 'Marketing (CC002)',
    occurrence: 'Quarterly',
    includedFees: '€450',
    number: 'INV-0456',
  },
];

const BillingAssistance = () => {
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedYear, setSelectedYear] = useState(2025);

  return (
    <section className="billing-page page-container">
      <div className="header">
        <h1>Billing Assistance</h1>
        <div className="filters">
          <div className="select-wrapper">
            <label>Month</label>
            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
              {months.map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
          <div className="select-wrapper">
            <label>Year</label>
            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div> 
      <p className="mobile-scroll-note">Scroll sideways to see full table</p>


      <div className="billing-table-wrapper">
        <table className="billing-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Cost Center</th>
              <th>Occurrence</th>
              <th>Included Fees</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.customer}</td>
                <td>{row.costCenter}</td>
                <td>{row.occurrence}</td>
                <td>{row.includedFees}</td>
                <td>{row.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BillingAssistance;
