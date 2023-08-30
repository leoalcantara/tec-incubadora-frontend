
import styles from './Header.module.css';
import {Navbar} from './Nav';

import tecIncubadoraLogo from '../assets/tec-incubadora-logo.svg'

export function Header(options) {
    return (
        <>
            <header className={styles.header}>
              <div className={styles.container}> 
                <img className={styles.logoTec}src={tecIncubadoraLogo} alt="Logo Tec Incubadora" />  
                <nav >
                    <ul className={styles.list}>
                        <li className={styles.item} ><a href="">Home</a></li>
                        <li className={styles.item} ><a href="">Sobre Nós</a></li>
                        <li className={styles.item} ><a href="">Serviços</a></li>
                        <li className={styles.item} ><a href="">Empresas</a></li>
                        <li className={styles.item} ><a href="">Comunicação</a></li>
                        <li className={styles.item} ><a href="">Contato</a></li>
                    </ul>
                </nav>
              </div> 
                               
            </header>
        </>
        
    )
}