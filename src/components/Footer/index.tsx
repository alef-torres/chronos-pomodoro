import styles from './styles.module.css'

export function Footer  () {
    return (
        <footer className={styles.footer}>
            <a className={styles.a} href="">Entenda como funciona a técnica do pomodoro</a>
            <a className={styles.a} href="">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com ❤️ por Restic55</a>
        </footer>
    )
}