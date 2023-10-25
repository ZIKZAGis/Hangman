export type InputTextPropsType = {
    value: string
    onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void
    maxLength: number
    disabled?: boolean
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

export type GameScreenPropsType = {
    toggleStart: () => void
    gameIsStart: boolean
}

export type PopUpPausePropsType = {
    state: boolean
    goHome: () => void
    reset: () => void
    close: () => void
    newGame: () => void
}

export type EndGamePropsType = {
    goHome: () => void
    reset: () => void
    nexWord: () => void
    win: boolean
    loss: boolean
    gamePoints: number
    wordsGuessed: number
    newGame: () => void
}