import React from 'react';
import './ExpenseTrends.css';

const ExpenseTrends = ({ expenses }) => {
  const maxAmount = Math.max(...expenses.map(e => e.amount));

  return (
    <div className="expense-trends">
      <h2>Top Expenses</h2>
      <div className="expense-chart">
        {expenses.map(({ category, amount }) => {
          const width = `${(amount / maxAmount) * 100}%`;
          return (
            <div key={category} className="expense-bar">
              <span className="category">{category}</span>
              <div className="bar-container">
                <div className="bar" style={{ width, backgroundColor: '#8A2BE2' }}></div> {/* Updated color */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpenseTrends;
