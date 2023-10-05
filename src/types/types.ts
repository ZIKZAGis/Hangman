export type InputTextPropsType = {
    value: string
    onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void
    maxLength: number
}

export type ButtonPropsType = {
    type?: 'button' | 'reset' | 'submit'
    description?: string
    onClick?: () => void
    disabled?: boolean
    children?: React.ReactNode
}

export type CellPropsType = {
    letter: string,
}

export type SheetPropsType = {
    miss: number
}