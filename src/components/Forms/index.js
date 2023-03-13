import TextFilder from "../TextField"
import './Form.css'

const Form = (props) => {
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextFilder label="Nome" placeHolder="Digite seu nome" />
                <TextFilder label="Cargo" placeHolder="Digite seu cargo" />
                <TextFilder label="Imagem" placeHolder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Form