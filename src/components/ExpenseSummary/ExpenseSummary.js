import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import './ExpenseSummary.css';

const ExpenseSummary = ({ expenses }) => {
  const data = [
    { name: 'Food', value: expenses.filter(e => e.category === 'Food').reduce((acc, curr) => acc + curr.amount, 0) },
    { name: 'Entertainment', value: expenses.filter(e => e.category === 'Entertainment').reduce((acc, curr) => acc + curr.amount, 0) },
    { name: 'Travel', value: expenses.filter(e => e.category === 'Travel').reduce((acc, curr) => acc + curr.amount, 0) },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  return (
    <div className="expense-summary">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend layout="vertical" align="right" verticalAlign="middle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseSummary;
