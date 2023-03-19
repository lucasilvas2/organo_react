import Employees from '../Employees'
import './Team.css'

const Team = (props) => {
    const css = { backgroundColor: props.colorSecondary }
    return (
        props.employees.length > 0 && <section className='team' style={css}>
            <h3 style={{ borderColor: props.colorPrimary }}>{props.team}</h3>
            <div className='cards_employees'>
                {props.employees.map(employee => <Employees key={employee.nome} colorHeader={props.colorPrimary} employee={employee} />)}
            </div>
        </section >
    )
}

export default Team