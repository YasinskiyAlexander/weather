import './App.css';
import styles from './App.module.css';
import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Weather} from "./components/Weather";

function App() {
  return (
    <div className={styles.wrapper}>
        <header className={styles.header}>
            <nav className={styles.header_nav_container}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_elem}>
                        <a href="/">
                            <img className={styles.logo_img} src="open_weather_logo_white.png" alt="logo_white"/>
                        </a>
                    </li>
                    <li className={styles.nav_elem}>
                        <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Назва населеного пункту, країни або регіону"
                                inputProps={{ 'aria-label': 'search maps' }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </li>
                </ul>
            </nav>
        </header>
        <main className={styles.page}>
            <div className={styles.main_container}>
                <Weather/>
            </div>
        </main>
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <span className={styles.copyright}>© 2024 OpenWeather ® All rights reserved</span>
            </div>
        </footer>
    </div>
  );
}

export default App;
