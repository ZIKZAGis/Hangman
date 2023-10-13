import styles from "./Keyboard.module.scss"
import { lettersArray } from "../../data/dataArrays"

type PropsType = {
    click: (e: React.SyntheticEvent<HTMLButtonElement>) => void
}

const Keyboard = ({click}: PropsType) => {
    return (
        <div className={styles.wrapper}>
            {lettersArray.map((letter, index) => (
                <button type="button" key={index} id={letter} onClick={click}>{letter}</button>
            ))}
        </div>
    )
}

export default Keyboard