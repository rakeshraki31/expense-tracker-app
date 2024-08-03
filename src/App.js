import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Header from './components/Header/Header';
import ExpenseList from './components/ExpenseList/ExpenseList';
import AddExpenseModal from './components/AddExpenseModal/AddExpenseModal';
import AddIncomeModal from './components/AddIncomeModal/AddIncomeModal';
import './App.css';

function App() {
  const [walletBalance, setWalletBalance] = useState(4500);
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Samosa', amount: 150, category: 'Food', date: '2024-03-20' },
    { id: 2, title: 'Movie', amount: 300, category: 'Entertainment', date: '2024-03-21' },
    { id: 3, title: 'Auto', amount: 50, category: 'Travel', date: '2024-03-22' },
  ]);
  const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] = useState(false);
  const [isAddIncomeModalOpen, setIsAddIncomeModalOpen] = useState(false);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
    setWalletBalance(walletBalance - expense.amount);
  };

  const handleAddIncome = (income) => {
    setWalletBalance(walletBalance + income);
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  const expenseData = [
    { name: 'Food', value: 30 },
    { name: 'Entertainment', value: 60 },
    { name: 'Travel', value: 10 },
  ];

  const COLORS = ['#8884d8', '#FF8042', '#FFBB28'];

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="summary-section">
          <div className="balance-card">
            <h3>Wallet Balance</h3>
            <h2>₹{walletBalance}</h2>
            <button className="add-income-button" onClick={() => setIsAddIncomeModalOpen(true)}>+ Add Income</button>
          </div>
          <div className="expenses-card">
            <h3>Expenses</h3>
            <h2>₹{totalExpenses}</h2>
            <button className="add-expense-button" onClick={() => setIsAddExpenseModalOpen(true)}>+ Add Expense</button>
          </div>
          <div className="pie-chart-card">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  innerRadius={0} // Changed from 60 to 0 to make it a full circle
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="pie-legend">
              <div className="legend-item"><span className="color-box" style={{backgroundColor: '#8884d8'}}></span>Food</div>
              <div className="legend-item"><span className="color-box" style={{backgroundColor: '#FF8042'}}></span>Entertainment</div>
              <div className="legend-item"><span className="color-box" style={{backgroundColor: '#FFBB28'}}></span>Travel</div>
            </div>
          </div>
        </div>
        <div className="details-section">
          <div className="transactions-section">
            <ExpenseList expenses={expenses} />
          </div>
          <div className="top-expenses-section">
            <h1>Top Expenses</h1>
            <div className="expense-bar">
              <div className="bar-label">Entertainment</div>
              <div className="bar-container">
                <div className="bar" style={{width: '100%'}}></div>
              </div>
            </div>
            <div className="expense-bar">
              <div className="bar-label">Food</div>
              <div className="bar-container">
                <div className="bar" style={{width: '50%'}}></div>
              </div>
            </div>
            <div className="expense-bar">
              <div className="bar-label">Travel</div>
              <div className="bar-container">
                <div className="bar" style={{width: '30%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isAddExpenseModalOpen && (
        <AddExpenseModal
          onAddExpense={handleAddExpense}
          onClose={() => setIsAddExpenseModalOpen(false)}
        />
      )}
      {isAddIncomeModalOpen && (
        <AddIncomeModal
          onAddIncome={handleAddIncome}
          onClose={() => setIsAddIncomeModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
