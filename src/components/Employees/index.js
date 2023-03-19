import './Employees.css'

const Employees = (props) => {
    return (
        <div className='employees'>
            <div className='header' style={{ backgroundColor: props.colorHeader }}>
                <img src={props.employee.image} alt={props.employee.nome}></img>
            </div>
            <div className='footer'>
                <h4>{props.employee.nome}</h4>
                <h5>{props.employee.cargo}</h5>
            </div>
        </div>
    )
}

export default Employees