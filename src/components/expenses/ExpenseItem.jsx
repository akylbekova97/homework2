import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            {/* ExpenseDate фанкцияга  пропстан келген date'ны  пропс кылып салып бердик */}
            <h2 className='expense-item__description'>{props.title}</h2>
            {/* ичинде простан келген title */}
            <div className='expense-item__price'> {props.price} $</div>
            {/* ичинде простан келген price */}
        </div>
    )
}
export default ExpenseItem;