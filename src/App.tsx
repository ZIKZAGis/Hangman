import { useEffect, useState } from "react";
import StartScreen from "./screens/start_screen/StartScreen";
import styles from "./App.module.scss"
import GameScreen from "./screens/game_screen/GameScreen";

const wordsArray = [
  "Программа",
  "макака",
  "прекрасный",
  "оладушек",
  "компьютер",
  "автомобиль",
  "галлерея",
  "оптимизация",
  "винишко",
  "музыка",
  "обладатель",
  "планетарный",
  "Коновал",
  "Склочник",
  "Своевременный",
  "Проявить",
  "Лукавый",
  "Расщедриться",
  "Большак",
  "Тронуться",
  "Поклевать",
  "Голубчик",
  "Разукомплектовать",
  "Панты",
  "Болезненный",
  "Циркорама",
];

const MAX_MISS = 7
const getRandomWord = () => Array.from(wordsArray[Math.floor(Math.random() * wordsArray.length)].toLowerCase())

const App = () => {
  const [randomWord, setRandomWord] = useState(getRandomWord())
  const [remainingLetters, setRemainingLetters] = useState(randomWord.length)
  const [remainingMiss, setRemainingMiss] = useState(MAX_MISS)
  const [answerArray, setAnswerArray] = useState(randomWord.map((i) => i = '_ '))
  const [usedLetters, setUsedLetters] = useState('')
  const [answer, setAnswer] = useState('')
  const [gamePoints, setGamePoints] = useState(0)
  const [win, setWin] = useState(false)
  const [loss, setLoss] = useState(false)
  const [startGame, setStartGame] = useState(false)

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


  return (
    <div className={styles.container}>
      {!startGame && <StartScreen onClick={() => setStartGame(true)}/>}
      {startGame && <GameScreen
        remainingMiss={remainingMiss}
        remainingLetters={remainingLetters}
        randomWord={randomWord} 
        answerArray={answerArray}
        usedLetters={usedLetters}
        onConfirm={onConfirm}
        onChange={onChange}
        answer={answer}
        loss={loss}
        win={win}
        gamePoints={gamePoints}
        MAX_MISS={MAX_MISS}
        startNewGame={startNewGame}
      />}
    </div>
  );
}

export default App;
