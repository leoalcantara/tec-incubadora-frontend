import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav >           
            <Link to= "/" className={styles.item}> Home </Link >
            <Link to= "/sobre" className={styles.item}> Sobre Nós </Link >
            <Link to= "/servicos" className={styles.item}> Serviços </Link >
            <Link to= "/empresas" className={styles.item}> Empresas </Link >
            <Link to= "/comunicacao" className={styles.item}> Comunicação </Link >
            <Link to="/contato" className={styles.item}> Contato </Link >
            
        </nav>
    )
}