import { ContactForm } from '../../components/ContactForm/Index';
import { Map } from '../../components/Map/Index';

import styles from './ContactPage.module.css';

export function ContactPage(){
    return (
        <div className={styles.container}>
            <header>
                <h1>Contatos</h1>
                <p>Se interessou em conhecer a tec ou trazer sua empresa para ser incubada? Entre em contato e converse conosco hoje mesmo.</p>
            </header>
            <div className={styles.box}>               
                <ContactForm/>
                <Map />
            </div>

        </div>
    )
}