import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav >           
            <Link to= "/" className={styles.item}> Home </Link >
            <Link to= "/about" className={styles.item}> Sobre Nós </Link >
            <Link to= "/services" className={styles.item}> Serviços </Link >
            <Link to="" className={styles.item}> Empresas </Link >
            <Link to="" className={styles.item}> Comunicação </Link >
            <Link to="/contact" className={styles.item}> Contato </Link >
            
        </nav>
    )
}