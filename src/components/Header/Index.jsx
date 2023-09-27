
import styles from './Header.module.css';
import {Navbar} from '../Navbar/Index';


import tecIncubadoraLogo from '../../assets/tec-incubadora-logo.svg'

export function Header() {
    return (
        <div>
            <header className={styles.header}>
              <div className={styles.container}> 
                <img className={styles.logoTec}src={tecIncubadoraLogo} alt="Logo Tec Incubadora" />  
                <Navbar/>
              </div> 
                               
            </header>
        </div>
        
    )
}