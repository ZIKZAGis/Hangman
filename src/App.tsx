import { useEffect, useState } from "react";
import InputText from "./components/input_text/InputText";
import Button from "./components/button/Button";
import styles from "./App.module.scss"
import Cell from "./components/cell/Cell";
import Sheet from "./components/sheet/Sheet";

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

const MAX_MISS = 11
let remainingMiss = MAX_MISS

const randomWord = Array.from(wordsArray[Math.floor(Math.random() * wordsArray.length)].toLowerCase())
const answerArray = randomWord.map((i) => i = '_ ')
let remainingLetters = randomWord.length

const App = () => {
  const [answer, setAnswer] = useState('')
  const [win, setWin] = useState(false)
  const [loss, setLoss] = useState(false)

  const onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setAnswer(e.currentTarget.value)
  }

  const onConfirm = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (answer.length !== 1) {
      console.log('Пожалуйста введите одну букву')
    } else {

      if (randomWord.join('').indexOf(answer.toLowerCase()) >= 0) {
        for (let j = 0; j < randomWord.length; j++) {
          if (randomWord[j] === answer.toLowerCase()) {
            answerArray[j] = answer.toLowerCase() + ' '
            remainingLetters--        
          }
        }
      } else {
        remainingMiss--
      }

      setAnswer('')
    }
  }

  useEffect(() => {
    remainingMiss === 0 && setLoss(true)
    remainingLetters === 0 && setWin(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingMiss, remainingLetters])
  
  return (
    <div className={styles.container}>
      <h1>Виселица!</h1>
      <Sheet miss={remainingMiss}/>
      <div className={styles.remaining_letters}>Осталось отгадать: {remainingLetters}</div>

      {/* _________для тестов */}
      <div>{randomWord}</div>
      {/* _________для тестов */}

      <div className={styles.answer_field}>
        {answerArray.map((letter, index) => (
          <div key={index}>
            <Cell letter={letter}/>
          </div>
        ))}
      </div>
      <form onSubmit={onConfirm} className={styles.bottom}>
        <InputText value={answer} maxLength={1} onChange={onChange}/>
        <Button type="submit" description={'Проверить'}/>
      </form>
      <div>Промохов осталось: {remainingMiss} из {MAX_MISS}</div>
      {loss && <h1>ПОРАЖЕНИЕ</h1>}
      {win && <h1>ПОБЕДА!!</h1>}
    </div>
  );
}

export default App;
