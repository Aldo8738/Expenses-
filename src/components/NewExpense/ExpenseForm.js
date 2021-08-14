import './ExpenseForm.css';
import React, { useState } from 'react';


const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setAmount] = useState('');
	const [enteredDate, setDate] = useState('');
	

	// React reads the value from the onChange
	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setAmount(event.target.value);
	}

	const dateChangeHandler = (event) => {
		setDate(event.target.value);
	}

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate)
		};

		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setAmount('');
		setDate('');
		props.onCancel();
	};

	const cancelHandler = () => {
		props.onCancel();
	};

	return <form onSubmit={submitHandler} >
		<div className="new-expense__controls">
			<div className="new-expense__control">
				<label>Title</label>
				<input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
			</div>
			<div className="new-expense__control">
				<label>Amount</label>
				<input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
			</div>
			<div className="new-expense__control">
				<label>Date</label>
				<input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
			</div>
		</div>


		<div className="new-expense__actions">
			<button type='button' onClick={cancelHandler}>Cancel</button>
			<button type='submit'>Add Expenses</button>
		</div>
	</form>
};

export default ExpenseForm;