import './App.css';
import styles from './App.module.css';
import {Weather} from "./components/Weather";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className={styles.wrapper}>
        <Header/>
        <main className={styles.page}>
            <div className={styles.main_container}>
                <Weather/>
            </div>
        </main>
       <Footer/>
    </div>
  );
}

export default App;
