import React from 'react';
import { FaPizzaSlice, FaFilm, FaCar } from 'react-icons/fa';
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineModeEdit } from "react-icons/md";
import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  const getIcon = (category) => {
    switch (category) {
      case 'Food':
        return <FaPizzaSlice />;
      case 'Entertainment':
        return <FaFilm />;
      case 'Travel':
        return <FaCar />;
      default:
        return null;
    }
  };

  return (
    <div className="expense-list">
      <h1>Recent Transactions</h1>
      <div className="expense-items">
        {expenses.map((expense, index) => (
          <div key={index} className="expense-item">
            <div className="expense-icon">
              {getIcon(expense.category)} {/* Use category icons */}
            </div>
            <div className="expense-details">
              <div className="expense-title">{expense.title}</div>
              <div className="expense-date">{expense.date}</div>
            </div>
            <div className="expense-amount">₹{expense.amount}</div>
            <div className="expense-actions">
              <button className="action-btn delete-btn"><TiDeleteOutline /></button> {/* Delete icon */}
              <button className="action-btn edit-btn"><MdOutlineModeEdit /></button> {/* Edit icon */}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="page-btn">←</button>
        <span className="page-number">1</span>
        <button className="page-btn">→</button>
      </div>
    </div>
  );
};

export default ExpenseList;
