/* eslint-disable react-hooks/exhaustive-deps */
import styles from './GameScreen.module.scss'
import Sheet from '../../components/sheet/Sheet'
import Button from '../../components/button/Button'
import {BsFillPauseBtnFill} from 'react-icons/bs'
import { useState, useEffect } from 'react'
import PopUpPause from '../../components/pop_up_pause/PopUpPause'
import { wordsArray } from '../../data/dataArrays'
import AnswerField from '../../components/answer_field/AnswerField'
import Keyboard from '../../components/Keyboard/Keyboard'
import PopUpEndGame from '../../components/pop_up_end_game/PopUpEndGame'


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
    const [answer, setAnswer] = useState('')
    const [level, setLevel] = useState(1)
    const [gamePoints, setGamePoints] = useState(0)
    const [levelPoints, setLevelPoints] = useState(0)
    const [win, setWin] = useState(false)
    const [loss, setLoss] = useState(false)
    const [pause, setPause] = useState(false)
    const buttons = document.getElementById('keyboard')?.querySelectorAll('button')


    const clearDisabled = () => {
      if (buttons) {
        buttons.forEach((button) => {
          button.disabled = false
          button.style.color = "#3786be"
        })
      }
    }

    const resetAnswer = () => {
      setAnswerArray(randomWord.map((i) => i = '_ '))
      setRemainingLetters(randomWord.length)
      setRemainingMiss(MAX_MISS)
      setLoss(false)
      setWin(false)
      setPause(false)
      setAnswer('')
      clearDisabled()
      setGamePoints(levelPoints)
    }

    const getNextWord = () => {
      if (win) {
        setLevel(prev => prev + 1)
      }
      clearDisabled()
      setRandomWord(getRandomWord())
    }

  
    useEffect(() => {
      resetAnswer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [randomWord])

    useEffect(() => {
       if (remainingMiss === 0) {
        setLoss(true)
       }
      remainingLetters === 0 && setWin(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [remainingMiss, remainingLetters])

    useEffect(() => {
      if (win) {
        setGamePoints(prev => prev + 10)
        setLevelPoints(gamePoints + 10)
      }
    }, [win])
    
    const onClickLatter = (e: React.SyntheticEvent<HTMLButtonElement>) => {
      setAnswer(e.currentTarget.id)
      e.currentTarget.disabled = true

      if (randomWord.includes(e.currentTarget.id)) {
        e.currentTarget.style.color = 'green'
      } else {
        e.currentTarget.style.color = 'red'
      }
    }

    useEffect(() => {
      if (randomWord.join('').indexOf(answer.toLowerCase()) >= 0) {
        for (let j = 0; j < randomWord.length; j++) {
          if (randomWord[j] === answer.toLowerCase()) {
            answerArray[j] = answer.toLowerCase() + ' '
            setRemainingLetters(prev => prev - 1)
            setGamePoints(prev => prev + 10)
          }
        }
      } else {
        gamePoints >= 3 ? setGamePoints(prev => prev - 3) : setGamePoints(0)
        setRemainingMiss(remainingMiss - 1)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [answer])
  
    return (
        <div className={styles.container}>
            <PopUpPause state={pause} goHome={toggleStart} reset={resetAnswer} close={() => setPause(false)}/>
            <div>Очки: {gamePoints}</div>
            <div>Уровень: {level}</div>
            <div className={styles.pause_button_wrapper}>
                <Button onClick={() => setPause(true)} disabled={pause}>
                    <BsFillPauseBtnFill/>
                </Button>
            </div>
            <AnswerField arr={answerArray}/>  
            <Sheet miss={remainingMiss}/>


            {/* _________для тестов */}
            <div style={{position: 'absolute', left: '0', top: '10px', fontWeight: 'bold', color: 'green'}}>{randomWord}</div>
            <div style={{position: 'absolute', left: '0', top: '70px', fontWeight: 'bold', color: 'red'}}>Очков уровня: {levelPoints}</div>
            <div style={{position: 'absolute', left: '0', top: '40px', fontWeight: 'bold', color: 'red'}}>Промохов осталось: {remainingMiss} из {MAX_MISS}</div>
            <div style={{position: 'absolute', left: '0', top: '100px', fontWeight: 'bold', color: 'red'}}>букв осталось отгадать: {remainingLetters}</div>
            {/* _________для тестов */}

          
            <Keyboard click={onClickLatter}/>
            
            <Button type="button" description="Новое слово" onClick={getNextWord}/>

            {(win || loss) && <PopUpEndGame 
                goHome={toggleStart} 
                reset={resetAnswer} 
                nexWord={getNextWord} 
                win={win} 
                loss={loss} 
                gamePoints={gamePoints} 
                wordsGuessed={level}/>
            }

        </div>
    )
}

export default GameScreen