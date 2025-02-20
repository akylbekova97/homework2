import './ExpenseDate.css'

function ExpenseDate(props) {
    const expenseDate = props.date
    // проптан келген дата
    const year = expenseDate.getFullYear()
    // жылын алдык
    const month = expenseDate.toLocaleString('en-US', {month: 'long'})
    // айын алдык
    const day = expenseDate.toLocaleString('en-US', {day: '2-digit'})
    // кунун алдык

    return(
    <div className='expense-date'>
        <div className='expense-date__year'>{year}</div>
        {/* чинде жыл */}
        <div className='expense-date__month'>{month}</div>
        {/* ичинде ай */}
        <div className='expense-date__day'>{day}</div>
        {/* ичинде кун */}
    </div>
    )
}
export default ExpenseDate;