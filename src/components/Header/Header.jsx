import styles from '../Header/Header.module.css';
// import { ButtonLinks } from '../ButtonLinks/ButtonLinks';
import { Button } from "../ButtonLinks/ButtonLinksStyle"

export function Header () {
    return (
        <header className={styles.header}>
            <a className={styles.logo} href="#">Logo</a>
            <nav className={styles.nav}>
                <Button as="a" href="#">Link 1</Button>
                <Button as="a" href="#" blue>Link</Button>
                <Button as="a" href="#" blue>Link</Button>
                <Button as="a" href="#" blue>Link</Button>
            </nav>
        </header>
    )
}
