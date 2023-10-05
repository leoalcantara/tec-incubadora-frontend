import styles from './Contact.module.css'

export  function Contact(){
    return (        
        <section className={styles.container}>
            <div className={styles.box}>
                <div className={styles.ProjectkBox}>
                    <h2>Tem algum projeto em mente?</h2>
                    <p>
                        Nos conte a sua ideia e receba o encaminhamento mais adequado.  
                        Preencha nosso formulário e nós retornaremos em breve.
                    </p>

                </div>
                <div className={styles.FormBox}>
                    <h2>Entre em contato</h2>
                    <p>Escolha o assunto e detalhe que precisa compartilhar conosco</p>

                    <form action="">

                    </form>

                </div>

            </div>
            
        </section>        
    )
}