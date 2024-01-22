import styles from "../App.module.css";
import {Logo} from "./Logo";
import {Search} from "./Search";

export const Header = () =>{

    return <header className={styles.header}>
        <nav className={styles.header_nav_container}>
            <ul className={styles.nav_list}>
                <li className={styles.nav_elem}>
                   <Logo/>
                </li>
                <li className={styles.nav_elem}>
                  <Search/>
                </li>
            </ul>
        </nav>
    </header>
}
