import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'

export function Menu() {
    return (
        <nav className={styles.menu}>
            <a href="" className={styles.menuLink}>
                <HouseIcon className={styles.timerIcon} />
            </a>
            <a href="" className={styles.menuLink}>
                <HistoryIcon className={styles.timerIcon} />
            </a>
            <a href="" className={styles.menuLink}>
                <SettingsIcon className={styles.timerIcon} />
            </a>
            <a href="" className={styles.menuLink}>
                <SunIcon className={styles.timerIcon} />
            </a>
        </nav>
    )
}