import styles from "../App.module.css";

export const Logo = () =>{

    return <a href="/">
        <img className={styles.logo_img} src="open_weather_logo_white.png" alt="logo_white"/>
    </a>
}
