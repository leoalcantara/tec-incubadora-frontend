import { ErrorBox } from './components/ErrorBox';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import styles from './App.module.css'

import ProgramImage from './assets/programa-de-incubacao.png'


import './global.css';

function App() {
  
  return (
    <div>
      <Header/>  

      <div className={styles.aboutBox}>
        <div className={styles.aboutContent}>
          <div>

          </div>
          <div></div>
          <div></div>
          <div></div>
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
                  É através do programa que projetos e ideias <br/> da área de tecnologia são apresentados <br/> e se transformam em startups. 
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
     
      <Footer/>
       
    </div>
  )
}

export default App
