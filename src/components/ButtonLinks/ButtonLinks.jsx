import styles from './ButtonLinks.module.css';

export function ButtonLinks ({content}) {

    return (
        <button className={styles.buttonLinks}>
            <a className={styles.link}  href="#">{content}</a>
        </button>
    )
}
