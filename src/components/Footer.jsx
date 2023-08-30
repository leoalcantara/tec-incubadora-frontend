import styles from './Footer.Module.css';
export function Footer (){
    return (
        <footer className={styles.footer}>
          <div className={styles.container}> 
            <div className={styles.row}>

                <div className={styles.columm}>
                    <h1 className={styles.heading}>Tec Incubadora</h1>

                    <a href="/" className={styles.footerlink}>Home</a>
                    <a href="/" className={styles.footerlink}>Sobre nós</a>
                    <a href="/" className={styles.footerlink}>Equipe</a>
                    <a href="/" className={styles.footerlink}>Contato</a>

                </div>                    

                <div className={styles.columm}>
                    <h1 className={styles.heading}>Serviços</h1>

                    <a href="/" className={styles.footerlink}>Incubação</a>
                    <a href="/" className={styles.footerlink}>Graduação</a>
                    <a href="/" className={styles.footerlink}>Consultorias</a>
                    <a href="/" className={styles.footerlink}>PDCE</a>
                    <a href="/" className={styles.footerlink}>Coworking</a>
                    <a href="/" className={styles.footerlink}>Aluguel de Salas</a>
                   
                </div>

                <div className={styles.columm}>
                    <h1 className={styles.heading}>Empresas</h1>

                    <a href="/" className={styles.footerlink}>Incubadas</a>
                    <a href="/" className={styles.footerlink}>Graduadas</a>
                    <a href="/" className={styles.footerlink}>Que passou por aqui</a>
                </div>

                <div className={styles.columm}>
                    <h1 className={styles.heading}>Comunicação</h1>

                    <a href="/" className={styles.footerlink}>Agendas</a>
                    <a href="/" className={styles.footerlink}>Notícias</a>
                    <a href="/" className={styles.footerlink}>Podcast</a>
                    <a href="/" className={styles.footerlink}>Tec Tube</a>
                </div>
                
            </div>
          </div>  
        </footer>
    )
}