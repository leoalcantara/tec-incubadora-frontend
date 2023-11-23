import styles from './Companies.module.css';


export function Companies() {
    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <div className={styles.header}>                  
                    <h1 className={styles.title}>Empresas Graduadas</h1>
                    <p>Conheça as empresas que estão incubadas em nossa instituição</p>
                </div> 
                <div className={styles.content}>

                </div>
            </div>
        </section>
    )
}