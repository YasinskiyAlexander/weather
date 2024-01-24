import styles from "../App.module.css";

export const Footer = () => {

    return <footer className={styles.footer}>
        <div className={styles.footer_container}>
            <span className={styles.copyright}>© 2024 OpenWeather ® All rights reserved</span>
        </div>
    </footer>
}
