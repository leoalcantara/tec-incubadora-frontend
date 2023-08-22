
import styles from './Header.module.css';
import {Navbar} from './Nav';

import tecIncubadoraLogo from '../assets/tec-incubadora-logo.svg'

export function Header(options) {
    return (
        <>
            <header className={styles.header}>
                <img src={tecIncubadoraLogo} alt="Logo Tec Incubadora" />  
                <Navbar />                
            </header>
        </>
        
    )
}