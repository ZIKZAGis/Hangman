import Button from "../button/Button"
import styles from "./PopUpEndGame.module.scss"
import {AiFillHome} from "react-icons/ai"
import {FaRepeat} from "react-icons/fa6"
import {GrLinkNext} from "react-icons/gr"
import {PiSmileyXEyesBold, PiSmileyWinkBold, PiBrainBold} from "react-icons/pi"
import { EndGamePropsType } from "../../types/types"

const PopUpEndGame = ({goHome, reset, nexWord, win, loss, gamePoints, wordsGuessed, newGame}: EndGamePropsType) => {
    return (
        <div className={`${styles.container} ${(win || loss) && styles.open}`}>
            <div className={`${styles.wrapper} ${win && styles.wrapper_win} ${loss && styles.wrapper_loss}`}>
                {win &&
                    <div className={styles.title}>
                        <h2>Отличная работа!</h2>
                        <PiSmileyWinkBold/>
                    </div>
                }
                {loss &&
                    <div className={styles.title}>
                        <h2>ИГРА ОКОНЧЕНА</h2>
                        <PiSmileyXEyesBold/>
                    </div>
                }
                <div className={styles.result}>
                    <PiBrainBold/>
                    <p>Набрано очков: <span>{gamePoints}</span></p>
                    <p>Слов Отгадано: <span>{wordsGuessed}</span></p>
                </div>
                <div className={styles.bottom}>
                    <Button onClick={goHome}>
                        <AiFillHome/>
                    </Button>
                    <div className={styles.new_game}>
                        <Button onClick={newGame}>
                            Новая Игра
                        </Button>
                    </div>
                    {loss && 
                        <Button onClick={reset}>
                            <FaRepeat/>
                        </Button>
                    }
                    {win && 
                        <Button onClick={nexWord}>
                            <GrLinkNext/>
                        </Button>
                    }
                </div>
            </div>
        </div>
    )
}

export default PopUpEndGame