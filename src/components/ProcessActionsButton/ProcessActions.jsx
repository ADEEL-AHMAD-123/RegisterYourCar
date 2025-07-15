import React, { useState } from 'react';
import './ProcessActions.scss';
import { FaEllipsisV } from 'react-icons/fa';

const actionOptions = [
  'Decommissioning via i-Kfz',
  'Re-registration via i-Kfz',
  'New registration via i-Kfz',
  'Daily registrations via i-Kfz',
  'Address or name change via i-Kfz',
];

const ProcessActions = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="process-actions">
      <button className="primary-action" onClick={() => setOpen(!open)}>
        Create Process <FaEllipsisV />
      </button>
      {open && (
        <div className="action-dropdown">
          {actionOptions.map((option, index) => (
            <button key={index} className="action-option">
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProcessActions;
