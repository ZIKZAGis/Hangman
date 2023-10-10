import { InputTextPropsType } from "../../types/types"

const InputText = ({value, onChange, maxLength, disabled = false}: InputTextPropsType) => {
    return (
        <>
            <input type="text" value={value} maxLength={maxLength} onChange={onChange} disabled={disabled}/>
        </>
    )
}

export default InputText