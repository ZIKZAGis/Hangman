import styles from './Sheet.module.scss'
import { SheetPropsType } from '../../types/types'


const Sheet = ({miss}: SheetPropsType) => {
    return (
        <div className={styles.wrapper}>
            <div className={miss <= 10 ? styles.line_1 : ''}/>
            <div className={miss <= 9 ? styles.line_2 : ''}/>
            <div className={miss <= 8 ? styles.line_3 : ''}/>
            <div className={miss <= 7 ? styles.line_4 : ''}/>
            <div className={miss <= 6 ? styles.line_5 : ''}/>
            <div className={miss <= 3 ? styles.line_6 : ''}/>
            <div className={miss <= 2 ? styles.line_7 : ''}/>
            <div className={miss <= 1 ? styles.line_8 : ''}/>
            <div className={miss === 0 ? styles.line_9 : ''}/>
            <div className={miss <= 5 ? styles.circle : ''}/>
            <div className={miss <= 4 ? styles.oval : ''}/>
        </div>
    )
}

export default Sheet