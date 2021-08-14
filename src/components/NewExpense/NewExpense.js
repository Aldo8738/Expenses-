import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {

	const [displayForm, setDisplayForm] = useState(false);
	let form;

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,  
			id: Math.random().toString()
		};
		props.onAddExpense(expenseData);
	};

	const showForm = () => {
		setDisplayForm(true);
	};

	const hideForm = () => {
		setDisplayForm(false);
	}
	return (
	<div className="new-expense">
		{!displayForm && 
		<button onClick={showForm}>Add New Expense</button>}
		{displayForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideForm}/>}
		

	</div>
	);
};

export default NewExpense;