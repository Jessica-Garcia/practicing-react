// import { ButtonLinks } from "../ButtonLinks/ButtonLinks";
import styles from "./TopSection.module.css";
import { Button } from "../ButtonLinks/ButtonLinksStyle";
export function TopSection() {
    return (
        <section className={styles.topSection}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <Button as="a" href="#">Lorem</Button>
                    <Button as="a" href="#">Lorem, ipsum.</Button>
                </div>
                <p>
                    Lorem ipsum dolor sit, amet Fugit id ipsa modi ad nisi esse temporibus doloremque sint dolorem reiciendis.
                </p>
                <Button>Lorem, ipsum.</Button>
            </div>
        </section>
    )
};