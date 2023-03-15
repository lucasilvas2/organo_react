import { useState } from 'react'
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

    const [nome, setNome] = useState(' ')
    const [cargo, setCargo] = useState(' ')
    const [image, setImage] = useState(' ')
    const [time, setTime] = useState(' ')

    const saveForm = (event) => {
        event.preventDefault();
        console.log('Form saved', nome, cargo, image, time)
        props.employeesRegistered({
            nome,
            cargo,
            image,
            time
        })
    }
    return (
        <section className="form">
            <form onSubmit={saveForm}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextFilder
                    required={true}
                    label="Nome"
                    placeHolder="Digite seu nome"
                    valueTarget={nome}
                    valueChange={valueTarget => setNome(valueTarget)} />
                <TextFilder
                    required={true}
                    label="Cargo"
                    placeHolder="Digite seu cargo"
                    valueTarget={cargo}
                    valueChange={valueTarget => setCargo(valueTarget)} />
                <TextFilder
                    label="Imagem"
                    placeHolder="Digite o endereço da imagem"
                    valueTarget={image}
                    valueChange={valueTarget => setImage(valueTarget)} />
                <Dropdown
                    required={true}
                    label="Times"
                    items={times}
                    valueTarget={time}
                    valueChange={valueTarget => setTime(valueTarget)} />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form