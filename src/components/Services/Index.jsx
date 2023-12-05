import { ServicesCard } from "../ServicesCard/";

import IncubationIcon from "../../assets/icons/Incubacao.svg"
import RoomIcon from "../../assets/icons/sala.svg"
import CoworkingIcon from "../../assets/icons/coworking.svg"
import MentoringIcon from "../../assets/icons/mentoria.svg"

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
                        URLIcon={IncubationIcon}
                        title="Incubação"
                        content="Como incubadora, promovemos a integração entre universidade, indústria e sociedade. Fomentamos empresas de base tecnológica."
                    />
                    <ServicesCard 
                        URLIcon={RoomIcon}
                        title="Aluguel de Salas"
                        content="Salas com total infraestrutura para reuniões, apresentações e dia a dia de trabalho. Conta com internet de alta velocidade, mesas, cadeiras e acesso ao espaço café (com microondas, purificador de água e geladeira)"
                    />
                    <ServicesCard 
                        URLIcon={CoworkingIcon}
                        title="Coworking"
                        content="Espaço climatizado, silencioso, com internet de alta velocidade, segurança e um excelente custo x benefício."
                    />
                    <ServicesCard 
                        URLIcon={MentoringIcon}
                        title="Consultorias"
                        content="As consultorias têm o objetivo de auxiliar organizações para obter financiamento e aprimorar sua tecnologia."
                    />
                    </div>                   
                </div>
                
            </section>
        </>

    )
}