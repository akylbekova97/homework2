import Chart from "../chart/Chart"
function ExpensesChart(props) {

    const chartDetaPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]

    for (const expense of props.expenses) {
        // циклга пропстан келген expenses(Арр'тын тукущее состояниясы) алдык
        const expenseMonth = expense.date.getMonth()
        // датадан айын алдык

        chartDetaPoints[expenseMonth].value += expense.price 
        // массивтеги айдын value += баасын
    }

    return <Chart datePoints={chartDetaPoints}/>
    // кайтар  Chart'ка пропс кылып  chartDetaPoints бердик

}

export default ExpensesChart








// import Chart from "../chart/Chart";

// function ExpensesChart(props) {


//     const chartDetaPoints = [
//         {label: 'Jan' , value: 0},
//         {label: 'Feb' , value: 0},
//         {label: 'Mar' , value: 0},
//         {label: 'Apr' , value: 0},
//         {label: 'May' , value: 0},
//         {label: 'Jun' , value: 0},
//         {label: 'Jel' , value: 0},
//         {label: 'Aus' , value: 0},
//         {label: 'Sep' , value: 0},
//         {label: 'Oct' , value: 0},
//         {label: 'Nov' , value: 0},
//         {label: 'Dec' , value: 0},
//     ]

//     for(const expense of props.expenses){
//         const expenseMonth = expense.date.getMonth()

//         chartDetaPoints[expenseMonth].value += expense.price


//     }

//     console.log(chartDetaPoints);

//     return <Chart datePoints={chartDetaPoints}/>
    
// }
// export default ExpensesChart;