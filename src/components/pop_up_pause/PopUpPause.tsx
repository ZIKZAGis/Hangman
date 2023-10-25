import Button from "../button/Button"
import styles from "./PopUpPause.module.scss"
import {AiOutlineClose, AiFillHome} from "react-icons/ai"
import {FaRepeat} from "react-icons/fa6"
import { PopUpPausePropsType } from "../../types/types"

const PopUpPause = ({state, goHome, reset, close, newGame}: PopUpPausePropsType) => {
    return (
        <div className={`${styles.container} ${state && styles.open}`}>
            <div className={styles.wrapper}>
                <div className={styles.close}>
                    <Button onClick={close}>
                        <AiOutlineClose/>
                    </Button>
                </div>
                <p className={styles.text}>
                    Пауза
                </p>
                <div className={styles.bottom}>
                    <Button onClick={goHome}>
                        <AiFillHome/>
                    </Button>
                    <Button onClick={reset}>
                        <FaRepeat/>
                    </Button>
                    <Button onClick={newGame}>
                        Новая Игра
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PopUpPause