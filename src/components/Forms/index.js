import Dropdown from "../Dropown"
import TextFilder from "../TextField"
import './Form.css'

const Form = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        ' Inovação e Gestão'
    ]
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextFilder label="Nome" placeHolder="Digite seu nome" />
                <TextFilder label="Cargo" placeHolder="Digite seu cargo" />
                <TextFilder label="Imagem" placeHolder="Digite o endereço da imagem" />
                <Dropdown label="Times" items={times} />
            </form>
        </section>
    )
}

export default Form