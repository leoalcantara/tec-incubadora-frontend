import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav >  

            <ul className={styles.menu}>
                <li> <Link to= "/" className={styles.item}> Home </Link ></li>
                <li>
                    Sobre Nós 
                    <ul className={styles.submenu}>
                        <Link to= "/sobre" className={styles.item} > Equipe </Link >                        
                        <Link to="/Consultores" className={styles.item}>Consultores</Link>
                    </ul>
                </li>
                <li> <Link to= "/servicos" className={styles.item}> Serviços </Link ></li>
                <li> <Link to= "/empresas" className={styles.item}> Empresas </Link ></li>
                <li><Link to= "/comunicacao" className={styles.item}> Comunicação </Link ></li>
                <li><Link to="/contato" className={styles.item}> Contato </Link ></li>
            </ul>                     
            
        </nav>
    )
}