import styles from './Companies.module.css';


export function Companies() {
    return (
        <section className={styles.container}>
            <div className={styles.header}>  
                <div>
                    <h1 className={styles.title}>Empresas Graduadas</h1>
                    <p>Conheça as empresas que estão incubadas em nossa instituição</p>
                </div>                
                
            </div>
            <div className={styles.box}>
                 
                <div className={styles.content}>

                </div>
            </div>
        </section>
    )
}