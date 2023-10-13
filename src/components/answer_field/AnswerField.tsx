import styles from "./AnswerField.module.scss"
import Cell from "../cell/Cell"

type PropsType = {
    arr: string[]
}

const AnswerField = ({arr}: PropsType) => {
    return (
        <div className={styles.wrapper}>
            {arr.map((item, index) => (
                <div key={index}>
                    <Cell letter={item}/>
                </div>
            ))}
        </div>
    )
}

export default AnswerField