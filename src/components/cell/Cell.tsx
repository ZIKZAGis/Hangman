import { CellPropsType } from "../../types/types"
import styles from './Cell.module.scss'

const Cell = ({letter}: CellPropsType) => {
    return (
        <div className={styles.wrapper}>
            {letter}
        </div>
    )
}

export default Cell