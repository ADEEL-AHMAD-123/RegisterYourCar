// pages/CreatePermanentPOA.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import '../../styles/components/multiStepForm.scss';

const CreatePermanentPOA = () => {
  const { id } = useParams();
  const [step, setStep] = useState(1);

  return (
    <div className="create-poa-page page-container">
      <h1 className="page-title">Create Permanent POA</h1>
      <p className="page-subtitle">
        You're creating a permanent POA for customer ID: <strong>{id}</strong>
      </p>

      <div className="multi-step-form">
      <div className="step-header">
        <div className="step active">Step 1</div>
        <div className="step">Step 2</div>
        <div className="step">Step 3</div>
      </div>

      <div className="form-body">
        <div>
          <label htmlFor="customer">Customer</label>
          <input type="text" id="customer" name="customer" />
        </div>

        <div>
          <label htmlFor="costCenter">Cost Center</label>
          <input type="text" id="costCenter" name="costCenter" />
        </div>

        {/* Add more fields as needed */}
      </div>

      <div className="form-actions">
        <button className="prev-btn">Back</button>
        <button className="next-btn">Next</button>
      </div>
    </div>
    </div>
  );
};

export default CreatePermanentPOA;
