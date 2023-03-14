import Button from "../Button"
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

    const saveForm = (event) => {
        event.preventDefault();

        console.log('Form saved')
    }
    return (
        <section className="form">
            <form onSubmit={saveForm}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextFilder required={true} label="Nome" placeHolder="Digite seu nome" />
                <TextFilder required={true} label="Cargo" placeHolder="Digite seu cargo" />
                <TextFilder label="Imagem" placeHolder="Digite o endereço da imagem" />
                <Dropdown required={true} label="Times" items={times} />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form