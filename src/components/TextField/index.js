import { useState } from 'react'
import './TextField.css'

const TextFilder = (props) => {
    const placeHolderMod = `${props.placeHolder}...`

    const typing = (event) => {
        props.valueChange(event.target.value)
    }

    return (
        <div className="filder-text">
            <label>{props.label}</label>
            <input value={props.value} onChange={typing} required={props.required} placeholder={placeHolderMod}></input>
        </div>
    )
}

export default TextFilder