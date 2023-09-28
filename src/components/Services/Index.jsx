import { ServicesCard } from "../ServicesCard";

import styles from './Services.module.css';


export function Services() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.box}>
                    <header>
                        <h2>Nossos Serviços</h2>
                        <p>Como incubadora, promovemos a integração entre universidade, indústria e sociedade. </p>
                        <p>Fomentamos empresas de base tecnológica.</p>
                    </header> 


                </div>

            </section>
        </>

    )
}