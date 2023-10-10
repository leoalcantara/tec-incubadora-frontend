import styles from './Contact.module.css';
import { ContactForm } from '../ContactForm';
import {Button} from '../Button';

export function Contact() {
    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <div className={styles.ProjectkBox}>
                    <h2>Tem algum projeto em mente?</h2>
                    <p>
                        Nos conte a sua ideia e receba o encaminhamento mais adequado.
                        Preencha nosso formulário e nós retornaremos em breve.
                    </p>
                    <Button text="Acessar formulário"/>
                </div>

                <ContactForm />

            </div>
        </section>
    )
}