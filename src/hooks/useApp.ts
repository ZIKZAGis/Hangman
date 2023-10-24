import { useState, useEffect } from 'react'
import { wordsArray } from '../data/dataArrays'

export const useApp = () => {
    const MAX_MISS = 7
    const getRandomWord = () => Array.from(wordsArray[Math.floor(Math.random() * wordsArray.length)].toLowerCase())
    const [randomWord, setRandomWord] = useState(getRandomWord())
    const [remainingLetters, setRemainingLetters] = useState(randomWord.length)
    const [remainingMiss, setRemainingMiss] = useState(MAX_MISS)
    const [answerArray, setAnswerArray] = useState(randomWord.map((i) => i = '_ '))
    const [answer, setAnswer] = useState('')
    const [level, setLevel] = useState(1)
    const [wordsGuessed, setWordGuessed] = useState(0)
    const [gamePoints, setGamePoints] = useState(0)
    const [levelPoints, setLevelPoints] = useState(0)
    const [win, setWin] = useState(false)
    const [loss, setLoss] = useState(false)
    const [pause, setPause] = useState(false)
    const buttons = document.getElementById('keyboard')?.querySelectorAll('button')

    const togglePause = () => {
        setPause(!pause)
    }

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
      win && setWordGuessed(prev => prev + 1)
      win && setGamePoints(prev => prev + 10)
      win && setLevelPoints(gamePoints + 10)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const startNewGame = () => {
      setLevel(1)
      setLevelPoints(0)
      setWordGuessed(0)
      setGamePoints(0)
      getNextWord()
      resetAnswer()
    }

    return {
        pause,
        resetAnswer,
        startNewGame,
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
    }
}