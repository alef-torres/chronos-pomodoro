import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'

type AvailableThemes = 'light' | 'dark';

export function Menu() {

    const [theme, setTheme] = useState<AvailableThemes>('dark')

    function toggleTheme(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) {
        event.preventDefault()
        setTheme(theme => theme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <nav className={styles.menu}>
            <a href="" className={styles.menuLink} aria-label="Home" title="Home">
                <HouseIcon className={styles.icon} />
            </a>
            <a href="" className={styles.menuLink} aria-label="History" title="History">
                <HistoryIcon className={styles.icon} />
            </a>
            <a href="" className={styles.menuLink} aria-label="Settings" title="Settings">
                <SettingsIcon className={styles.icon} />
            </a>
            <a href="#" className={styles.menuLink} aria-label="Theme" title="Theme" onClick={toggleTheme}>
                <SunIcon className={styles.icon} />
            </a>
        </nav>
    )
}