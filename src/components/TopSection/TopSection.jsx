import { ButtonLinks } from "../ButtonLinks/ButtonLinks";
import styles from "./TopSection.module.css";

export function TopSection() {
    return (
        <section className={styles.topSection}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <ButtonLinks content={"Lorem"}/>
                    <ButtonLinks content={"Lorem Ipsum"}/>
                </div>
                <p>
                    Lorem ipsum dolor sit, amet Fugit id ipsa modi ad nisi esse temporibus doloremque sint dolorem reiciendis.
                </p>
                <ButtonLinks content={"Lorem Ipsum"}/>
            </div>
        </section>
    )
};