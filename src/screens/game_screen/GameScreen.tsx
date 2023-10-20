/* eslint-disable react-hooks/exhaustive-deps */
import styles from './GameScreen.module.scss'
import Sheet from '../../components/sheet/Sheet'
import Button from '../../components/button/Button'
import {BsFillPauseBtnFill} from 'react-icons/bs'
import PopUpPause from '../../components/pop_up_pause/PopUpPause'
import AnswerField from '../../components/answer_field/AnswerField'
import Keyboard from '../../components/Keyboard/Keyboard'
import PopUpEndGame from '../../components/pop_up_end_game/PopUpEndGame'
import { useApp } from '../../hooks/useApp'


type PropsType = {
    toggleStart: () => void
}

const GameScreen = ({toggleStart}: PropsType) => {
  const {
    pause,
    resetAnswer,
    gamePoints,
    level,
    remainingMiss,
    answerArray,
    randomWord,
    levelPoints,
    MAX_MISS,
    remainingLetters,
    onClickLatter,
    win,
    loss,
    getNextWord,
    togglePause
  } = useApp()

    return (
        <div className={styles.container}>
          <PopUpPause state={pause} goHome={toggleStart} reset={resetAnswer} close={togglePause}/>
          <div>Очки: {gamePoints}</div>
          <div>Уровень: {level}</div>
          <div className={styles.pause_button_wrapper}>
              <Button onClick={togglePause} disabled={pause}>
                  <BsFillPauseBtnFill/>
              </Button>
          </div>
          <Sheet miss={remainingMiss}/>
          <AnswerField arr={answerArray}/>  

          {/* _________для тестов */}
          <div style={{position: 'absolute', left: '0', bottom: '10px', fontWeight: 'bold', color: 'green'}}>{randomWord}</div>
          <div style={{position: 'absolute', left: '0', bottom: '70px', fontWeight: 'bold', color: 'red'}}>Очков уровня: {levelPoints}</div>
          <div style={{position: 'absolute', left: '0', bottom: '40px', fontWeight: 'bold', color: 'red'}}>Промохов осталось: {remainingMiss} из {MAX_MISS}</div>
          <div style={{position: 'absolute', left: '0', bottom: '100px', fontWeight: 'bold', color: 'red'}}>букв осталось отгадать: {remainingLetters}</div>
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