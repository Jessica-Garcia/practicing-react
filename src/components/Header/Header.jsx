import styles from '../Header/Header.module.css';

export function Header () {
    return (
        <header className={styles.header}>
            <a className={styles.logo} href="#">Logo</a>
            <nav className={styles.nav}>
                <a className={styles.green} href="#">Lorem</a>
                <a className={styles.blue} href="#">Lorem</a>
                <a className={styles.blue} href="#">Lorem</a>
                <a className={styles.blue} href="#">Lorem</a>
            </nav>
        </header>
    )
}
