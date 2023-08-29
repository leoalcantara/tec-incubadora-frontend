import styles from './Footer.Module.css';
export function Footer (){
    return (
        <footer className={styles.footer}>
          <div className={styles.container}>  
            <div clasName={styles.row}>
                <div clasName={styles.columm}>
                    <h1 className={styles.heading}>Tec Incubadora</h1>
                </div>
                <div clasName={styles.columm}>
                <h1 className={styles.heading}>Serviços</h1>
                </div>
                <div clasName={styles.columm}>
                    <h1 className={styles.heading}>Empresa</h1>
                </div>
                <div clasName={styles.columm}>
                    <h1 className={styles.heading}>Comunicação</h1>
                </div>
                
            </div>
          </div>  
        </footer>
    )
}