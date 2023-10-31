
import styles from './Header.module.css';
import {Navbar} from '../Navbar/Index';
import { Link } from 'react-router-dom';


import tecIncubadoraLogo from '../../assets/tec-incubadora-logo.svg'

export function Header() {
    return (
        <div>
            <header className={styles.header}>
              <div className={styles.container}> 
                <Link to= "/"><img className={styles.logoTec}src={tecIncubadoraLogo} alt="Logo Tec Incubadora" />  </Link>
                <Navbar/>
              </div> 
                               
            </header>
        </div>
        
    )
}