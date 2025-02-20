import NewExpenses from './components/newExpenses/NewExpenses';
import Expenses from './components/expenses/Expenses';
import './App.css';
import { useState } from 'react';


const DUMMY_EXPENSES = [
  {id: 'el1', title: 'Polite paper', price: 5, date: new Date(2022, 5, 10)},
  {id: 'el2', title: 'Utilitis', price: 8, date: new Date(2025, 6, 5)},
  {id: 'el3', title: 'Kinder garden', price: 3, date: new Date(2023, 3, 22)},
  {id: 'el4', title: 'Online coutre', price: 7, date: new Date(2024, 1, 30)}
]


function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
    // тукущее состояние,  функция которая обновляет состояние = начальное состояния массив(DUMMY_EXPENSES)

  function addExpense(expensesDate){
    // параметринде NewExpenses'тен поднятие болуп келген данныйлар
    setExpenses((prevExpenses) => {
      // обновленный состояниясы  (параметинде акыркы актуальный состояниясы)
      return [expensesDate, ...prevExpenses]
      // кайтар  поднятие болгон данныйлар  акыркы актуальный состояниясы 
    })
  }

  return (
    <div className="App">
      <NewExpenses onAdd={addExpense}/>
      {/* пропс кылып функция берет (Поднятие состояния кылыш учун) */}

      <Expenses expenses={expenses}/>
      {/* пропска  тукущее состояниясы берилет */}
    </div>
  );
}

export default App;
