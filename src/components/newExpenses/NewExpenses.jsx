import Card from "../ui/Card";
import ExpensesForm from "./ExpensesForm";
import './NewExpenses.css'

function NewExpenses(props){

    function onGetExpense (expensesDate) {
        // параментинде ExpensesForm'дан поднятие болуп келген данныйлар
        props.onAdd({
            id: Math.random().toString(),
            // айди кошуп стринг кылып
            ...expensesDate
            // поднятие болгон данныйларды салдык
        })
        // пропстан келген функция менен (Lifting-up кылып) данныйларды родительский элементке берет
    }

    return (
        <Card className="new-expense">
            <ExpensesForm onGet={onGetExpense}/>
            {/* пропс кылып  функция берет (Поднятие состояния кылыш учун) */}
        </Card>
    )
}
export default NewExpenses;
