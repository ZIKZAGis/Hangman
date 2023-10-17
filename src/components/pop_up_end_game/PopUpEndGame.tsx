import Button from "../button/Button"
import styles from "./PopUpEndGame.module.scss"
import {AiFillHome} from "react-icons/ai"
import {FaRepeat} from "react-icons/fa6"
import {GrLinkNext} from "react-icons/gr"
import {PiSmileyXEyesBold, PiSmileyWinkBold, PiBrainBold} from "react-icons/pi"

type PropsType = {
    goHome: () => void
    reset: () => void
    nexWord: () => void
    win: boolean
    loss: boolean
    gamePoints: number
    wordsGuessed: number
}

const PopUpEndGame = ({goHome, reset, nexWord, win, loss, gamePoints, wordsGuessed}: PropsType) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper} style={{backgroundColor: `${win && 'green'}`}}>
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
                    <p>Набрано очков: {gamePoints}</p>
                    <p>Слов Отгадано: {wordsGuessed - 1}</p>
                </div>
                <div>
                    <Button onClick={goHome}>
                        <AiFillHome/>
                    </Button>
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