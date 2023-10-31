import { useState } from "react";
import StartScreen from "./screens/start_screen/StartScreen";
import styles from "./App.module.scss"
import GameScreen from "./screens/game_screen/GameScreen";

const App = () => {
  const [gameIsStart, setGameIsStart] = useState(false)
  const startGame = () => setGameIsStart(!gameIsStart)

  return (
    <div className={styles.container}>
      <StartScreen onClick={startGame} gameIsStart={gameIsStart}/>
      <GameScreen toggleStart={startGame} gameIsStart={gameIsStart}/>
    </div>
  );
}

export default App;
