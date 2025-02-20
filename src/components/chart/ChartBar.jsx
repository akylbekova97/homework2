import './ChartBar.css'

function ChartBar(props) {
    let barFillHeight = '0%'
    // башында 0%

    if(props.totalMax > 0){
        // пропстан келген totalMax 0 чон болсо
        barFillHeight = Math.round((props.value / props.totalMax) * 100 ) + '%'
        // barFillHeight = пропстан келген value  totalMax'ка болуп процентин алып (округлуние кылдык)  (% - стил иштеш учун)
    }

    return  (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div style={{height: barFillHeight}} className='chart-bar__fill' />
                {/* высотасы = barFillHeight */}
            </div>
            <label className='chart-bar__label'>{props.label}</label>
            {/* пропстан келген label */}
        </div>
    )
}
export default ChartBar;









// function ChartBar(props){

//     let barFillHeight = '0%'

//     if(props.totalMax > 0){
//         barFillHeight = Math.round((props.value / props.totalMax) * 100) + '%'
//     }

//     return (
//         <div className='chart-bar'>
//             <div className='chart-bar__inner'>
//                 <div className='chart-bar__fill' style={{height: barFillHeight}}/>
//             </div>
//             <label className='chart-bar__label' >{props.label}</label>
//         </div>
//     )
// }
// export default ChartBar;