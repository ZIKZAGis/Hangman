import { InputTextPropsType } from "../../types/types"

const InputText = ({value, onChange, maxLength}: InputTextPropsType) => {
    return (
        <>
            <input type="text" value={value} maxLength={maxLength} onChange={onChange}/>
        </>
    )
}

export default InputText