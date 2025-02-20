import './Card.css'

function Card(props){
    return (
        <div className={`${props.className} card`}>{props.children}</div>
        // claccName = пропстан келген класс + сард  (эки клас иштейт)  Кард парный болгон учун children 
    )
}
export default Card