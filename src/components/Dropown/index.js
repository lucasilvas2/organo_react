import './Dropdown.css'
const Dropdown = (props) => {
    const changeSelect = (event) => {
        props.valueChange(event.target.value)
    }

    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select value={props.valueTarget} onChange={changeSelect} required={props.required}>
                <option key={''} disabled>Selecione um valor...</option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown