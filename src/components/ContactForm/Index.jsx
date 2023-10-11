import { useState } from 'react';
import { Button } from '../Button/Index';
import styles from './ContactForm.module.css';

export function ContactForm() {
    const[subject, setSubject] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();
        alert(subject);          
    }

    return (
        <div className={styles.FormBox}>
            <h2>Entre em contato</h2>
            <p>Escolha o assunto e detalhe que precisa compartilhar conosco</p>

            <form onSubmit={sendEmail}>
                <select 
                    placeholder='Sobre o que deseja falar com a gente?'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                >
                    <option value="" disabled selected>Sobre o que deseja falar com a gente?</option>
                    <option value="Incubar">Quero incubar minha empresa</option>
                    <option value="Conhecer">Quero conhecer presencialmente o espaço </option>
                    <option value="Alugar">Quero alugar uma sala</option>
                    <option value="Outro">Outro</option>

                </select>

                <input
                    type="text"
                    placeholder='Nome'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder='E-mail de contato'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                
                <textarea
                    placeholder='Breve texto sobre o assunto'
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <br />
                <Button 
                    text="Enviar mensagem"
                    type='Submit'
                />
            </form>
            

        </div>

    )
}