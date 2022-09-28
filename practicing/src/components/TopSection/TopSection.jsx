import styles from "./TopSection.module.css";

export function TopSection() {
    return (
        <section className={styles.topSection}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <a href="#">Lorem</a>
                    <a href="">Lorem ipsum</a>
                </div>
                <p>
                    Lorem ipsum dolor sit, amet Fugit id ipsa modi ad nisi esse temporibus doloremque sint dolorem reiciendis.
                </p>
                <button className={styles.button}>Lorem</button>
            </div>
        </section>
    )
};