import styles from "./GamePoints.module.scss"
import {BsFillStarFill} from "react-icons/bs"

type PropsType = {
    gamePoints: number
}

const GamePoints = ({gamePoints}: PropsType) => {
    return (
        <div className={styles.wrapper}>
            <BsFillStarFill/>
            <p>{gamePoints}</p>
        </div>
    )
}

export default GamePoints