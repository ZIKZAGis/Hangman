import { useState } from "react";

const wordsArray = [
  "программа",
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
  "планетарный"
];

const randomWord = Array.from(wordsArray[Math.floor(Math.random() * wordsArray.length)])
const answerArray = randomWord.map((i) => i = '_ ')


const App = () => {
  const [answer, setAnswer] = useState('')
  let remainingLetters = randomWord.length;


  const onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setAnswer(e.currentTarget.value)
  }

  const onConfirm = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e.currentTarget.nodeValue)
    if (answer.length !== 1) {
      console.log('Пожалуйста введите одну букву')
    } else {
      for (let j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === answer) {
          answerArray[j] = answer
          remainingLetters--
        }
      }
    }

    console.log(answerArray)
  }



  return (
    <div>
      <div>Виселица!</div>
      <div>Осталось отгадать {remainingLetters} букв</div>
      <div>{randomWord}</div>
      <div>{answerArray}</div>
      <form onSubmit={onConfirm}>
        <input type="text" name="word" id="word" value={answer} maxLength={1} onChange={onChange}/>
        <button type="submit">Проверить</button>
      </form>
    </div>
  );
}

export default App;
