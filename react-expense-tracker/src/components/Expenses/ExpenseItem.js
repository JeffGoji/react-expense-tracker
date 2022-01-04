import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';




const ExpenseItem = (props) => {
    //Define functions before the return:
    //You can only call a useState inside a React component.
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item_description"><h2>{title}</h2></div>
            <div className="expense-item__price">$ {props.amount}</div>

            <button onClick={clickHandler}>Change Title</button>
        </div>
    );
}

export default ExpenseItem;
