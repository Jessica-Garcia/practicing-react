import styles from '../Header/Header.module.css';
import { ButtonLinks } from '../ButtonLinks/ButtonLinks';

export function Header () {
    return (
        <header className={styles.header}>
            <a className={styles.logo} href="#">Logo</a>
            <nav className={styles.nav}>
                <ButtonLinks content={'Link1'} />
                <ButtonLinks content={'Link2'} />
                <ButtonLinks content={'Link3'} />
                <ButtonLinks content={'Link4'} />
            </nav>
        </header>
    )
}
