import styles from './About.Module.css';


import CertificationIcon  from '../../assets/icons/certificado.svg';
import CompaniesIcon  from '../../assets/icons/empresas.svg';
import MentorIngIcon  from '../../assets/icons/mentoria.svg';
import JobsIcon  from '../../assets/icons/empregos.svg';




export function About() {
    return (
        <>
            <section className={styles.About} >
                <div className={styles.Container}>
                    <div className={styles.Box}>

                        <div className={styles.Card}>
                            <div className={styles.circle}>
                                <img src={CertificationIcon} alt="" />
                            </div>
                            <p>16 anos de Trajetória</p>
                        </div>

                        <div className={styles.Card}>
                            <div className={styles.circle}>
                                <img src={CompaniesIcon} alt="" />
                            </div>
                            <p>120 Empresas sensibilizadas</p>
                        </div>

                        <div className={styles.Card}>
                            <div className={styles.circle}>
                                <img src={MentorIngIcon} alt="" />
                            </div>
                            <p>500 Mentorias ministradas</p>
                        </div>

                        <div className={styles.Card}>
                            <div className={styles.circle}>
                                <img src={JobsIcon} alt="" />
                            </div>
                            <p>350 Empregos já foram gerados</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 