import { Footer } from "./components/Footer/"
import { Header } from "./components/Header/Index"

import styles from "./App.module.css"

import ProgramImage from "./assets/programa-de-incubacao.png"
import CertificationIcon from "./assets/icons/certificado.svg"
import JobsIcon from "./assets/icons/empregos.svg"
import MentorIngIcon from "./assets/icons/mentoria.svg"
import CompaniesIcon from "./assets/icons/empresas.svg"

import "./global.css"

function App() {
  return (
    <div>
      <Header />

      <div className={styles.aboutContainer}>
        <div className={styles.aboutBox}>
          
          <div className={styles.aboutCard}>
            <div className={styles.circle}>
              <img src={CertificationIcon} alt="" />              
            </div>
            <p>16 anos de Trajetória</p>
          </div>

          <div className={styles.aboutCard}>
            <div className={styles.circle}>
              <img src={CompaniesIcon} alt="" />
            </div>
            <p>120 Empresas sensibilizadas</p>
          </div>

          <div className={styles.aboutCard} >
            <div className={styles.circle}>
              <img src={MentorIngIcon} alt="" />
            </div>
            <p>500 Mentorias ministradas</p>
          </div>

          <div className={styles.aboutCard}>
            <div className={styles.circle}>
              <img src={JobsIcon} alt="" />
            </div>
            <p>350 Empregos já foram gerados</p>
          </div>

        </div>
      </div>



      <div className={styles.container}>
        <div className={styles.box}>

          <div>
            <img src={ProgramImage} alt="" />
          </div>

          <div>
            <h2>Programa de Incubação</h2>
            <span>
              É através do programa que projetos e ideias da área de
              tecnologia são apresentados  e se transformam em startups.
            </span>
            <ul>
              <li className={styles.item}>Aprenda com empreendedores de sucesso</li>
              <li className={styles.item}>Mentorias exclusivas e personalizadas</li>
              <li className={styles.item}>Taxa de 80% de sobrevivência no mercado</li>
              <li className={styles.item}>Networking de alto nível</li>
            </ul>

            <button>Conheça mais</button>
          </div>
        </div>
      </div>


      <div className={styles.servicesContainer}>
        <div className={styles.servicesBox}>
          <h2>Nossos Serviços</h2>
          <p>Como incubadora, promovemos a integração entre universidade, indústria e sociedade. Fomentamos empresas de base tecnológica.</p>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default App
