import styles from './IncubationProgram.module.css';
import ProgramImage from '../../assets/programa-de-incubacao.png';
import { Button } from '../Button';

export function IncubationProgram(){
    return (
        <section className={styles.container}>
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
            <Button
              text="Conheça mais"
            />            
          </div>
        </div>
      </section>

    )
}