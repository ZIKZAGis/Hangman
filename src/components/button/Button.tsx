import { ButtonPropsType } from "../../types/types"

const Button = ({type = 'button', description, onClick, children, disabled = false}: ButtonPropsType) => {
    return (
        <button type={type} onClick={onClick} disabled={disabled}>
            {description}
            {children}
        </button>
    )
}

export default Button