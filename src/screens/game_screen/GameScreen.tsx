import { GameScreenPropsType } from '../../types/types'
import styles from './GameScreen.module.scss'
import Sheet from '../../components/sheet/Sheet'
import Button from '../../components/button/Button'
import {BsPauseCircleFill} from 'react-icons/bs'
import PopUpPause from '../../components/pop_up_pause/PopUpPause'
import AnswerField from '../../components/answer_field/AnswerField'
import Keyboard from '../../components/Keyboard/Keyboard'
import PopUpEndGame from '../../components/pop_up_end_game/PopUpEndGame'
import { useApp } from '../../hooks/useApp'
import GamePoints from '../../components/game_points/GamePoints'

const GameScreen = ({toggleStart, gameIsStart}: GameScreenPropsType) => {
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
    togglePause,
    wordsGuessed
  } = useApp()

  const goHome = () => {
    toggleStart()
    togglePause()
  }

    return (
        <div className={`${styles.container} ${gameIsStart && styles.open}`}>
          <PopUpPause state={pause} goHome={goHome} reset={resetAnswer} close={togglePause}/>
          <GamePoints gamePoints={gamePoints}/>
          <div>Уровень: {level}</div>
          <div className={styles.pause_button_wrapper}>
              <Button onClick={togglePause} disabled={pause}>
                  <BsPauseCircleFill/>
              </Button>
          </div>
          <Sheet miss={remainingMiss}/>
          <AnswerField arr={answerArray}/>  

          {/* _________для тестов */}
          <div style={{position: 'absolute', left: '10px', bottom: '130px', fontWeight: 'bold', color: 'green'}}>{randomWord}</div>
          <div style={{position: 'absolute', left: '10px', bottom: '100px', fontWeight: 'bold', color: 'red'}}>Очков уровня: {levelPoints}</div>
          <div style={{position: 'absolute', left: '10px', bottom: '40px', fontWeight: 'bold', color: 'red'}}>Промохов осталось: {remainingMiss} из {MAX_MISS}</div>
          <div style={{position: 'absolute', left: '10px', bottom: '70px', fontWeight: 'bold', color: 'red'}}>букв осталось отгадать: {remainingLetters}</div>
          <div style={{position: 'absolute', left: '10px', bottom: '10px'}}>
            <Button type="button" description="Новое слово" onClick={getNextWord}/>
          </div>
          {/* _________для тестов */}

          <Keyboard click={onClickLatter}/>
          <PopUpEndGame 
            goHome={toggleStart} 
            reset={resetAnswer} 
            nexWord={getNextWord} 
            win={win} 
            loss={loss} 
            gamePoints={gamePoints} 
            wordsGuessed={wordsGuessed}
          />
        </div>
    )
}

export default GameScreen