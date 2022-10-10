import styles from './styles.module.css';
import Lg from '../../assets/Lg.png'

export function Header () {
    return (
        <header className={styles.header}>
            <a className={styles.logo} href="#"><img src={Lg} alt="Logo" /></a>
        </header>
    )
}
