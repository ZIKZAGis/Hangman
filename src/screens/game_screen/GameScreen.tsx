import styles from './GameScreen.module.scss'
import Sheet from '../../components/sheet/Sheet'
import Button from '../../components/button/Button'
import InputText from '../../components/input_text/InputText'
import {BsFillPauseBtnFill} from 'react-icons/bs'
import { useState, useEffect } from 'react'
import PopUpPause from '../../components/pop_up_pause/PopUpPause'
import { wordsArray } from '../../data/dataArrays'
import AnswerField from '../../components/answer_field/AnswerField'

type PropsType = {
    toggleStart: () => void
}

const GameScreen = ({toggleStart}: PropsType) => {
    const MAX_MISS = 7
    const getRandomWord = () => Array.from(wordsArray[Math.floor(Math.random() * wordsArray.length)].toLowerCase())
    const [randomWord, setRandomWord] = useState(getRandomWord())
    const [remainingLetters, setRemainingLetters] = useState(randomWord.length)
    const [remainingMiss, setRemainingMiss] = useState(MAX_MISS)
    const [answerArray, setAnswerArray] = useState(randomWord.map((i) => i = '_ '))
    const [usedLetters, setUsedLetters] = useState('')
    const [answer, setAnswer] = useState('')
    const [gamePoints, setGamePoints] = useState(0)
    const [win, setWin] = useState(false)
    const [loss, setLoss] = useState(false)
    const [pause, setPause] = useState(false)
  
    useEffect(() => {
      setAnswerArray(randomWord.map((i) => i = '_ '))
      setRemainingLetters(randomWord.length)
      setUsedLetters('')
      setRemainingMiss(MAX_MISS)
      setLoss(false)
      setWin(false)
      setAnswer('')
    }, [randomWord])
  
    useEffect(() => {
      remainingMiss === 0 && setLoss(true)
      remainingLetters === 0 && setWin(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [remainingMiss, remainingLetters])
    
    const onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
      setAnswer(e.currentTarget.value)
    }
  
    const onConfirm = (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (answer.length !== 1) {
        alert('Пожалуйста введите одну букву')
      } else if (usedLetters.includes(answer)) {
        alert('буква уже использована')
      } else {
          setUsedLetters((prev) => prev + ` ${answer}`)
          if (randomWord.join('').indexOf(answer.toLowerCase()) >= 0) {
            for (let j = 0; j < randomWord.length; j++) {
              if (randomWord[j] === answer.toLowerCase()) {
                answerArray[j] = answer.toLowerCase() + ' '
                setRemainingLetters(prev => prev - 1)
              }
            }
          } else {
            setRemainingMiss(remainingMiss - 1)
          }
        setAnswer('')
      }
    }
  
    const startNewGame = () => {
      if (win) {
        setGamePoints(prev => prev + 1)
      }
      setRandomWord(getRandomWord())
    }


    const resetAnswerHandler = () => {
        console.log('new word')
    }

    return (
        <div className={styles.container}>
            <PopUpPause state={pause} goHome={toggleStart} reset={resetAnswerHandler} close={() => setPause(false)}/>
            <div>Отгаданных слов: {gamePoints}</div>
            <div className={styles.pause_button_wrapper}>
                <Button onClick={() => setPause(true)} disabled={pause}>
                    <BsFillPauseBtnFill/>
                </Button>
            </div>
            <AnswerField arr={answerArray}/>  
            <Sheet miss={remainingMiss}/>
            <div className={styles.remaining_letters}>букв осталось отгадать: {remainingLetters}</div>

            {/* _________для тестов */}
            <div>{randomWord}</div>
            {/* _________для тестов */}

            <div>Использованные буквы: {usedLetters}</div>

            <form onSubmit={onConfirm} className={styles.bottom}>
                <InputText value={answer} maxLength={1} onChange={onChange} disabled={(loss || win) ? true : false }/>
                <Button type="submit" description={'Проверить'}/>
            </form>
            <div>Промохов осталось: {remainingMiss} из {MAX_MISS}</div>
            <Button type="button" description="Новое слово" onClick={startNewGame}/>
            {loss && <h1>ПОРАЖЕНИЕ</h1>}
            {win && <h1>ПОБЕДА!!</h1>}
        </div>
    )
}

export default GameScreen