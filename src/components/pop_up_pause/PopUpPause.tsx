import Button from "../button/Button"
import styles from "./PopUpPause.module.scss"
import {AiOutlineClose, AiFillHome} from "react-icons/ai"
import {FaRepeat} from "react-icons/fa6"

type PropsType = {
    state: boolean
    goHome: () => void
    reset: () => void
    close: () => void
}

const PopUpPause = ({state, goHome, reset, close}: PropsType) => {
    return (
        <div className={`${styles.wrapper } ${state && styles.open}`}>
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
            </div>
        </div>
    )
}

export default PopUpPause