import styles from './ContactForm.module.css';

export function ContactForm() {
    return (
        <div className={styles.FormBox}>
            <h2>Entre em contato</h2>
            <p>Escolha o assunto e detalhe que precisa compartilhar conosco</p>

            <form action="">

                <select name="" id="" placeholder='Sobre o que deseja falar com a gente?'>

                    <option value="" disabled selected>Sobre o que deseja falar com a gente?</option>
                    <option value="teste1">Quero incubar minha empresa</option>
                    <option value="teste2">Quero conhecer presencialmente o espaço </option>
                    <option value="teste3">Quero alugar uma sala</option>
                    <option value="teste4">Outro</option>
                </select>

                <input type="text" placeholder='Nome' />
                <input type="text" placeholder='E-mail de contato' />
                <textarea placeholder='Breve texto sobre o assunto' rows="5" />

            </form>

        </div>

    )
}