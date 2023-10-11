import Button from "../../components/button/Button"
import styles from "./StartScreen.module.scss"
import {GrCirclePlay} from "react-icons/gr"
import pencil from "./../../media/pencil.png"

type PropsType = {
    onClick: () => void
}

const StartScreen = ({onClick}: PropsType) => {
    return (
        <div className={styles.wrapper}>
            <h1>Виселица!</h1>
            <img src={pencil} alt="карандаш"/>
            <Button onClick={onClick}>
                <GrCirclePlay/>
            </Button>
        </div>
    )
}

export default StartScreen