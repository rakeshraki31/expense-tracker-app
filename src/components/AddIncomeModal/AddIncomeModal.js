import React, { useState } from 'react';
import './AddIncomeModal.css';

const AddIncomeModal = ({ onAddIncome, onClose }) => {
  const [income, setIncome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddIncome(parseFloat(income));
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h1>Add Balance</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Income Amount"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
          />
          <div className="modal-buttons">
            <button type="submit" className="add-balance-btn">Add Balance</button>
            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddIncomeModal;
