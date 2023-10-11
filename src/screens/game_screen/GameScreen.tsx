import styles from './GameScreen.module.scss'
import Sheet from '../../components/sheet/Sheet'
import Button from '../../components/button/Button'
import InputText from '../../components/input_text/InputText'
import Cell from '../../components/cell/Cell'

type PropsType = {
    remainingMiss: number
    remainingLetters: number
    randomWord: string[]
    answerArray: string[]
    usedLetters: string
    onConfirm: (e: React.SyntheticEvent<HTMLFormElement>) => void
    onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void
    startNewGame: () => void
    answer: string
    loss: boolean
    win: boolean
    gamePoints: number
    MAX_MISS: number
}

const GameScreen = ({remainingMiss, remainingLetters, randomWord, answerArray, usedLetters, onConfirm, onChange, answer, loss, win, gamePoints, MAX_MISS, startNewGame}: PropsType) => {
    return (
        <div className={styles.container}>
            <Sheet miss={remainingMiss}/>
            <div className={styles.remaining_letters}>Осталось отгадать: {remainingLetters}</div>

            {/* _________для тестов */}
            <div>{randomWord}</div>
            {/* _________для тестов */}

                
            <div className={styles.answer_field} style={{display: 'flex', margin: '0 auto', width: 'fit-content'}}>
            {answerArray.map((letter, index) => (
                <div key={index}>
                <Cell letter={letter}/>
                </div>
            ))}
            </div>
                
            <div>Использованные буквы: {usedLetters}</div>

            <form onSubmit={onConfirm} className={styles.bottom}>
                <InputText value={answer} maxLength={1} onChange={onChange} disabled={(loss || win) ? true : false }/>
                <Button type="submit" description={'Проверить'}/>
            </form>
            <div>Отгаданных слов: {gamePoints}</div>
            <div>Промохов осталось: {remainingMiss} из {MAX_MISS}</div>
            <Button type="button" description="Новое слово" onClick={startNewGame}/>
            {loss && <h1>ПОРАЖЕНИЕ</h1>}
            {win && <h1>ПОБЕДА!!</h1>}
        </div>
    )
}

export default GameScreen