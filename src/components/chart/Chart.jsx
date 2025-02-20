import './Chart.css'
import ChartBar from './ChartBar'

function Chart(props) {

    const dateValues = props.datePoints.map((date) => date.value)
    // пропстан келген массивдин ар бир элементтин value алдык

    const totalMax = Math.max(...dateValues)
    // tatalMax = эн коп value чыгарат 


    return (
        <div className='chart'>
            {props.datePoints.map(el => (
                // пропстан келген массивди мар кылып
                <ChartBar key={el.label} label={el.label} value={el.value} totalMax={totalMax} />
                // ар бир элементке ChartBar функция иштейт  (пропс кылып данныйларды бердик)
            ))}
        </div>
    )
}

export default Chart;

