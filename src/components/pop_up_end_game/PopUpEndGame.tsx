import Button from "../button/Button"
import styles from "./PopUpEndGame.module.scss"

type PropsType = {
    goHome: () => void
    reset: () => void
    nexWord: () => void
    win: boolean
    loss: boolean
    gamePoints: number
    wordsGuessed: number
}

const PopUpEndGame = ({goHome, reset, nexWord, win, loss, gamePoints, wordsGuessed}: PropsType) => {
    return (
        <div className={styles.wrapper}>
            <h1>
                {win && 'Отличная работа!'}
                {loss && 'Конец игры'}
            </h1>
            <div>Набрано очков: {gamePoints}</div>
            <div>Слов Отгадано: {wordsGuessed - 1}</div>
            <div>
                <Button onClick={goHome}>Домой</Button>
                {loss && <Button onClick={reset}>Попробовать заново</Button>}
                {win && <Button onClick={nexWord}>Следующее слово</Button>}
            </div>
        </div>
    )
}

export default PopUpEndGame