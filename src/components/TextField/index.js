import './TextField.css'

const TextFilder = (props) => {
    const placeHolderMod = `${props.placeHolder}...`
    return (
        <div className="filder-text">
            <label>{props.label}</label>
            <input placeholder={placeHolderMod}></input>
        </div>
    )
}

export default TextFilder