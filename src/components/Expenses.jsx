import ExpenseItem from "./ExpenseItem"

function Expenses() {

    const DUMMY_EXPENSES = [
        {id: 'el1', title: 'Polite paper', prise: 2, date: new Date(2020, 5, 10)},
        {id: 'el2', title: 'Utilitis', prise: 2, date: new Date(2021, 6, 5)},
        {id: 'el3', title: 'Kinder garden', prise: 2, date: new Date(2022, 3, 22)},
        {id: 'el4', title: 'Online coutre', prise: 2, date: new Date(2024, 1, 30)}
      ]
    

    return (
        <div>
            <ExpenseItem title={DUMMY_EXPENSES[0].title} prise={DUMMY_EXPENSES[0].prise} date={DUMMY_EXPENSES[0].date}/>
            <ExpenseItem title={DUMMY_EXPENSES[1].title} prise={DUMMY_EXPENSES[1].prise} date={DUMMY_EXPENSES[1].date}/>
            <ExpenseItem title={DUMMY_EXPENSES[2].title} prise={DUMMY_EXPENSES[2].prise} date={DUMMY_EXPENSES[2].date}/>
            <ExpenseItem title={DUMMY_EXPENSES[3].title} prise={DUMMY_EXPENSES[3].prise} date={DUMMY_EXPENSES[3].date}/>
        </div>
    )
}
export default Expenses