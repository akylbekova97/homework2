import './ExpenseItem.css';
import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';

// хук -  крючок

function ExpenseItem(props) {
    // const [state, setState] = useState(0)
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState(props.title)
    // const someState = useState(0)
    // const state = someState[0]
    // const setState = someState[1]

    const expensePrise = props.prise

    const titleChengeHendler = () => {
        setTitle('updated')
    }
    // const handleTitleChange = () => {alert('Hello')}

    const incrementHendler = () => {
        setCount(count +1) 
    }

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <h2 className='expense-item__description'>{title}</h2>
            <button onClick={titleChengeHendler}>Chenge</button>
            <button onClick={incrementHendler}>Increment</button>
            <span>{count}</span>
            <div className='expense-item__price'> {expensePrise} $</div>
        </div>
    )
}
export default ExpenseItem;