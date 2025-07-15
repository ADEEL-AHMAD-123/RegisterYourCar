import React, { useState } from 'react';
import './Filters.scss';
import { ChevronDown } from 'lucide-react';

const options = {
  customerTypes: ['Private', 'Business', 'Dealer'],
  orderTypes: ['Registration', 'Decommissioning', 'Change'],
  statuses: ['Pending', 'Completed', 'Rejected'],
};

const DropdownFilter = ({ label, options, selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const toggleOption = (option) => {
    setSelected(
      selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option]
    );
  };

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  const hasValue = selected.length > 0;

  return (
    <div className={`filter-wrapper dropdown-filter ${hasValue ? 'active' : ''}`}>
      <div
        className={`dropdown-display ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <label className={hasValue || open ? 'floating' : ''}>{label}</label>
        <div className="selected-values-wrapper">
  <div className="selected-values">
    {hasValue ? (
      selected.map((val) => (
        <span className="tag" key={val}>
          {val}
          <span
            className="remove-icon"
            onClick={(e) => {
              e.stopPropagation();
              setSelected(selected.filter((v) => v !== val));
            }}
          >
            ×
          </span>
        </span>
      ))
    ) : (
      <span className="placeholder">{label}</span>
    )}
  </div>
</div>


        <ChevronDown className={`chevron ${open ? 'open' : ''}`} />
      </div>

      {open && (
        <div className="dropdown-body">
          <input
            className="dropdown-search"
            type="text"
            placeholder={`Search ${label}`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="checkboxes">
            {filteredOptions.map((option) => (
              <label key={option} className="dropdown-checkbox">
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  onChange={() => toggleOption(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Filters = () => {
  const [fromDate, setFromDate] = useState('');
  const [untilDate, setUntilDate] = useState('');
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [statuses, setStatuses] = useState([]);

  return (
    <div className="filters-bar">
      <div className="filters-row">
        <div className="filter-wrapper">
          <div className={`floating-input ${fromDate ? 'active' : ''}`}>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
            <label>From</label>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className={`floating-input ${untilDate ? 'active' : ''}`}>
            <input
              type="date"
              value={untilDate}
              onChange={(e) => setUntilDate(e.target.value)}
            />
            <label>Until</label>
          </div>
        </div>

        <DropdownFilter
          label="Customer Type"
          options={options.customerTypes}
          selected={customers}
          setSelected={setCustomers}
        />
        <DropdownFilter
          label="Order Type"
          options={options.orderTypes}
          selected={orders}
          setSelected={setOrders}
        />
        <DropdownFilter
          label="Status"
          options={options.statuses}
          selected={statuses}
          setSelected={setStatuses}
        />
      </div>
    </div>
  );
};

export default Filters;
