import { useState } from "react";
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem"
import ExpensesChart from "./ExpensesChart";
import './Expenses.css'
import ExpensesFiletr from "./ExpensesFilter";

function Expenses(props) {

    const [selectedYear, setSelectedYear] = useState(2025)
    // тукущее состояние,  функция которая обновляет состояние = начальное состояния 2025

    function selectYearHandler(year) {
        // параметринде ExpensesFilter'ден поднятие болуп келген жыл 
        setSelectedYear(year);
        // обновление состояния = поднятие болуп келген жыл
    }

    const filteredExpenses = props.expenses.filter((el) => {
        // пропстан келген expenses(Арр'тын тукущее состояниясы)  филтрация кылып
        return el.date.getFullYear().toString() === selectedYear
        // кайтар элементтин датасынын жылы (сап кылып)  selectedYear'ге (поднятие болуп келген жылга) барабар болсо 
    })


    let expensesContet  = <p style={{color: 'red', fontSize: '20px'}}>No expenses found</p>
    // башында ушундай болуп турат

    if (selectedYear === 'all') {
        // эгерде selectedYear all болсо
        expensesContet = props.expenses.map((el) => {
            // expensesContet  = пропстан келген expenses'ти (Арр'тын тукущее состояниясы)  map кылып  
            return <ExpenseItem key={el.id} title={el.title} price={el.price} date={el.date}/>
            // кайтар ар бир элементке ExpenseItem функция иштейт  данныйларды пропс кылып бердик
        })
    }

    if(filteredExpenses.length > 0){
        // фильтрациядан откон элементтер 0 коп болсо
        expensesContet = filteredExpenses.map((el) => {
            // expensesContet  = фильтрациядан откон элементтерди map кылып  
            return <ExpenseItem key={el.id} title={el.title} price={el.price} date={el.date}/>
            // кайтар ар бир элементке ExpenseItem функция иштейт  данныйларды пропс кылып бердик
        })
    }


    return (
        <Card className="expenses">

            <ExpensesFiletr onSelect={selectYearHandler} selectedYear={selectedYear}/>
            {/* ExpensesFilter пропс кылып функция бердик (поднятие кылыш учун) дагы пропс кылып тукущее состояниясы бердик */}

            <ExpensesChart expenses={props.expenses}/>  
            {/* пропска   expenses(Арр'тын тукущее состояниясы) берилет */}

            {expensesContet}
            {/* expensesContet условный рендеринг болот */}

        </Card>
    )
}

export default Expenses;