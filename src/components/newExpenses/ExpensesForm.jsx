import './ExpensesForm.css'
import { useState } from 'react'

function ExpensesForm(props) {

    const [title, setTitle] = useState('')
    // тукущее состояние,  функция которая обновляет состояние = начальное состояния пустая строка
    const [amount, setAmount] = useState('')
    // тукущее состояние,  функция которая обновляет состояние = начальное состояния пустая строка
    const [date, setDate] = useState('')
    // тукущее состояние,  функция которая обновляет состояние = начальное состояния пустая строка

    const titleChengeHandler = (e) => {
        setTitle(e.target.value);
        //  обновление состояния  = инпуттан келет
    }

    const amoutChengeHandler = (e) => {
        setAmount(e.target.value);
       //  обновление состояния  = инпуттан келет
    }    
    
    const dateChengeHandler = (e) => {
        setDate(e.target.value);
        // обновление состояния  = инпуттан келет
    }


    const submitHandler = (e) => {
        e.preventDefault()
        // form'токтотот 

        if(title.trim().length === '' || amount === '' || date.length === 0){
            // (пробеолди алганда) пустой болсо
            alert('You need fill the input')
            // alert чарат
            return
            // токтотот 
        }

        props.onGet({
            title: title,
            price: Number(amount),
            // ChartBar туура иштеш учун Number кылдык
            date: new Date(date)
            // инпуттан стринг келет аны объект кылыш учун жаны new Date салдык
        })
        // пропстан келген функция менен (Lifting-up кылып) данныйларды родительский элементке берет

        setTitle('')
        // обновление состояния  пустая строка
        setAmount('')
        // обновление состояния  пустая строка
        setDate('')
        // обновление состояния  пустая строка
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input value={title}  onChange={titleChengeHandler} type="text"/>
                {/* двух сторонная првязка кылдык */}
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input min={'1'} value={amount} onChange={amoutChengeHandler} type="number"/>
                {/*1ден кичине сан болбойт  двух сторонная првязка кылдык */}
            </div>           
             <div className='new-expense__control'>
                <label>Date</label>
                <input max={'2026-01-01'} min={'2021-01-01'} value={date} onChange={dateChengeHandler} type="date"/>
                {/* 2021жылдан 2026жалга чейин эле болот   двух сторонная првязка кылдык */}
            </div>
            <div>
                <button className='new-expense__actions'>Add expense</button>
            </div>
        </div>
    </form>
}
export default ExpensesForm