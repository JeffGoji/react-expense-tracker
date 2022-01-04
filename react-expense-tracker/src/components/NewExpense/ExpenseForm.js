import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    //useState varaiables:
    //Multi State method:
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //Single State Method, pass in an object instead of a string or number, I just included it as a thought to re-work the code later into single-state-methods:
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate:'',
    // });

    //Title Handler Variable
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    //Amount Handler Variable
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    //Date Handler Variable
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    //Submit Handler:
    const submitHandler = (event) => {
        event.preventDefault();
        //Expense data object:
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData);
        //Resets to empty strings after data is submitted:
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('')
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2022-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form >
}

export default ExpenseForm;