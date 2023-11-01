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
    onClickLatter,
    win,
    loss,
    getNextWord,
    togglePause,
    wordsGuessed,
    startNewGame,
  } = useApp()

  const goHome = () => {
    toggleStart()
    startNewGame()
  }

    return (
        <div className={`${styles.container} ${gameIsStart && styles.open}`}>
          <PopUpPause 
            state={pause} 
            goHome={goHome} 
            reset={resetAnswer} 
            close={togglePause}
            newGame={startNewGame}
          />
          <GamePoints gamePoints={gamePoints}/>
          <div className={styles.level}>Уровень: {level}</div>
          <div className={styles.pause_button_wrapper}>
              <Button onClick={togglePause} disabled={pause}>
                  <BsPauseCircleFill/>
              </Button>
          </div>
          <Sheet miss={remainingMiss}/>
          <AnswerField arr={answerArray}/>  

          {/* _________для тестов */}
          <div style={{position: 'absolute', left: '50%', top: '0', fontSize: '8px', transform: 'translateX(-50%)'}}>
            <Button type="button" description="Новая Игра" onClick={startNewGame}/>
          </div>
          <div style={{position: 'absolute', left: '50%', top: '35px', fontWeight: 'bold', color: 'green', fontSize: '10px', transform: 'translateX(-50%)'}}>{randomWord}</div>
          <div style={{position: 'absolute', left: '50%', top: '20px', fontSize: '8px', transform: 'translateX(-50%)'}}>
            <Button type="button" description="Новое слово" onClick={getNextWord}/>
          </div>
          {/* _________для тестов */}

          <Keyboard click={onClickLatter}/>
          <PopUpEndGame 
            goHome={goHome} 
            reset={resetAnswer} 
            nexWord={getNextWord} 
            newGame={startNewGame}
            win={win} 
            loss={loss} 
            gamePoints={gamePoints} 
            wordsGuessed={wordsGuessed}
          />
        </div>
    )
}

export default GameScreen