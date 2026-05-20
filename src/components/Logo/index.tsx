import { TimerIcon } from 'lucide-react'
import styles from './styles.module.css'

export function Logo() {
    return (
        <div className={styles.container}>
            <a href="" className={styles.logoLink}>
                <TimerIcon className={styles.timerIcon} />
                <span className={styles.title}>CHRONOS</span>
            </a>
        </div>
    )
}