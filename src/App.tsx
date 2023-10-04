import { useEffect, useState } from "react";

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

const MAX_MISS = 10
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
    <div>
      <div>Виселица!</div>
      <div>Букв осталось отгадать: {remainingLetters}</div>
      <div>{randomWord}</div>
      <div>{answerArray}</div>
      <form onSubmit={onConfirm}>
        <input type="text" value={answer} maxLength={1} onChange={onChange}/>
        <button type="submit">Проверить</button>
      </form>
      <div>Попыток: {remainingMiss} из {MAX_MISS}</div>
      {loss && <h1>ПОРАЖЕНИЕ</h1>}
      {win && <h1>ПОБЕДА!!</h1>}
    </div>
  );
}

export default App;
