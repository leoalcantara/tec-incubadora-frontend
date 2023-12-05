import { ContactForm } from '@/components/ContactForm';
import { Map } from '@/components/Map/Index';

import styles from '@/pages/ContactPage/ContactPage.module.css';

export function ContactPage(){
    return (
        <div className={styles.container}>
            <header>
                <h1>Contatos</h1>
                <p>Se interessou em conhecer a tec ou trazer sua empresa para ser incubada? Entre em contato e converse conosco hoje mesmo.</p>
            </header>
            <div className={styles.box}>               
                <ContactForm/>
               
            </div>

        </div>
    )
}