import styles from './Nav.module.css';

export function Navbar(options) {
    return (
        <nav >
            <ul className={styles.list}>
                <li className={styles.item} >Home</li>
                <li className={styles.item} >Sobre Nós</li>
                <li className={styles.item} >Serviços</li>
                <li className={styles.item} >Empresas</li>
                <li className={styles.item} >Comunicação</li>
                <li className={styles.item} >Contato</li>
            </ul>
        </nav>
    )
}