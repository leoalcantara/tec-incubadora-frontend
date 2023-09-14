import { ErrorBox } from "./components/ErrorBox"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

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
          
          <div>
            <div className={styles.circle}>
              <img src={CertificationIcon} alt="" />              
            </div>
            <p>16 anos de <br/>Trajetória</p>
          </div>
          <div>
            <div className={styles.circle}>
              <img src={CompaniesIcon} alt="" />
            </div>
            <p>120 Empresas <br/> sensibilizadas</p>
          </div>
          <div>
            <div className={styles.circle}>
              <img src={MentorIngIcon} alt="" />
            </div>
            <p>500 Mentorias<br/>ministradas</p>
          </div>
          <div>
            <div className={styles.circle}>
              <img src={JobsIcon} alt="" />
            </div>
            <p>350 Empregos já<br/>foram gerados</p>
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
              É através do programa que projetos e ideias <br /> da área de
              tecnologia são apresentados <br /> e se transformam em startups.
            </span>
            <ul>
              <li>Aprenda com empreendedores de sucesso</li>
              <li>Mentorias exclusivas e personalizadas</li>
              <li>Taxa de 80% de sobrevivência no mercado</li>
              <li>Networking de alto nível</li>
            </ul>

            <button>Conheça mais</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
