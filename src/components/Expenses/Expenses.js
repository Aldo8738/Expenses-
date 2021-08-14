import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [year, setYear] = useState('2020');
  
  const saveExpenseFilter = (enteredExpenseFilterYear) => {
    setYear(enteredExpenseFilterYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      
      <Card className="expenses">
        <ExpensesFilter 
          selected={year} 
          onSaveExpenseFilter={saveExpenseFilter}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;