import React, { useState } from 'react';
import './BatchProcessing.scss';
import { FaInbox } from 'react-icons/fa';

const tabs = [
  { key: 'dealership', label: 'Car Dealership' },
  { key: 'office', label: 'Office' },
  { key: 'authority', label: 'License Authority' },
  { key: 'delivery', label: 'Delivery' },
  { key: 'diploma', label: 'Diploma' },
];

const tabContent = {
  dealership: [],
  office: [],
  authority: [],
  delivery: [],
  diploma: [],
};

const BatchProcessing = () => {
  const [activeTab, setActiveTab] = useState('dealership');

  const renderContent = () => {
    const content = tabContent[activeTab];
    if (!content || content.length === 0) {
      return (
        <div className="empty-state">
          <FaInbox className="empty-icon" />
          <p>Nothing to process</p>
        </div>
      );
    }

    return (
      <div className="tab-content">
        {/* Render your content here */}
      </div>
    );
  };

  return (
    <section className="batch-page page-container">
      <div className="header">
        <h1>Batch Processing</h1>
        <p>
          Here you can change the status of several transactions at once, for example if
          you have picked up orders from the car dealership or taken them to the registration authority.
        </p>
      </div>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`tab-button ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-panel">{renderContent()}</div>
    </section>
  );
};

export default BatchProcessing;
