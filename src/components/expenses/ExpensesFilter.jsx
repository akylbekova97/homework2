import './ExpensesFilter.css'

function ExpensesFiletr(props) {

    function selectChangeHendler(e) {
        props.onSelect(e.target.value)
        // пропстан келген функция менен (Lifting-up кылып) select'тен келген значенияны родительский элементке берет
    }

    return <div className='expenses-filter'>
        <div className='expenses-filter__control'>
            <label htmlFor="">Select by year</label>
            <select onChange={selectChangeHendler} value={props.selectedYear}>
            {/* басканда selectChangeHendler иштейт  двух сторонная првязка кылдык */}
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="all">all</option>
            </select>
        </div>
    </div>
}
export default ExpensesFiletr;