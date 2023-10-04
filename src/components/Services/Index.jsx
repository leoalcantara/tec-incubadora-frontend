import { ServicesCard } from "../ServicesCard/";

import styles from './Services.module.css';


export function Services() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.box}>
                    <header>
                        <h1>Nossos Serviços</h1>
                        <p>Como incubadora, promovemos a integração entre universidade, indústria e sociedade. </p>
                        <p>Fomentamos empresas de base tecnológica.</p>
                    </header>  

                    <div className={styles.content}>
                    <ServicesCard 
                        icon="../../assets/icons/Incubação.svg"
                        title="Incubação"
                        content="Como incubadora, promovemos a integração entre universidade, indústria e sociedade. Fomentamos empresas de base tecnológica."
                    />
                    <ServicesCard 
                        title="Aluguel de Salas"
                        content="Salas com total infraestrutura para reuniões, apresentações e dia a dia de trabalho. Conta com internet de alta velocidade, mesas, cadeiras e acesso ao espaço café (com microondas, purificador de água e geladeira)"
                    />
                    <ServicesCard 
                        title="Coworking"
                        content="Espaço climatizado, silencioso, com internet de alta velocidade, segurança e um excelente custo x benefício."
                    />
                    <ServicesCard 
                        title="Consultorias"
                        content="As consultorias têm o objetivo de auxiliar organizações para obter financiamento e aprimorar sua tecnologia."
                    />
                </div>                   
                </div>
                
            </section>
        </>

    )
}