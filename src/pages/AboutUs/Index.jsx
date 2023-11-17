import { Team } from '../../components/Team';

import styles from './AboutUs.module.css';

import CoverMission from '../../assets/cover-missao.jpg';
import CoverVision from '../../assets/cover-visao.jpg';
import CoverValues from '../../assets/cover-valores.jpg';
import Coverpropeller from '../../assets/cover-helice.jpg';
import TecIncubadoraImage from '../../assets/tec-incubadora.jpg'

export function AboutUs(){
    return (
        <div className={styles.container}>
            <div className={styles.box}>
              <div className={styles.about}>               
                <div className={styles.header}>
                    <h1>Quem Somos</h1> 
                </div>

                <div className={styles.content}>
                    <p>A TEC é um instrumento de desenvolvimento do Norte e Noroeste do Estado do Rio de Janeiro, que abriga empreendimentos de base tecnológica com ênfase em inovação, visando torná-los mais competitivos.</p> 
                    <p>Ela nasceu no dia 16 de outubro de 2006, a partir de uma parceria da Universidade Estadual do Norte Fluminense Darcy Ribeiro (Uenf) e do Instituto Federal Fluminense (IFF) com instituições comprometidas com o desenvolvimento regional.</p>             
                    <p>Dentre essas instituições estão Fundação Norte Fluminense de Desenvolvimento Regional (Fundenor), Fundação PRÓ-IFF, Universidade Federal Fluminense (UFF), Fundação Estadual do Norte Fluminense (Fenorte), Sebrae, Associação Comercial e Industrial de Campos, Firjan e Prefeitura Municipal de Campos dos Goytacazes.</p>
                    <p>Para atender a esse objetivo, a incubadora de empresas oferece, também, cursos de capacitação para os novos empreendedores e monitora a atuação das empresas recém-criadas para apoiá-las nos seus primeiros anos de atuação.</p>
                
                </div>

              </div>
              
              <div className={styles.cards}>
                <div className={styles.card}>                    
                    <img 
                        className={styles.cover}
                        src={CoverMission} 
                        alt="" 
                    />
                    <h3>Missão</h3>
                    <p>Fomentar negócios e projetos inovadores, por meio da informação, conhecimento, empreendedorismo e infraestrutura em ambiente colaborativo, com a integração entre Centros de Ensino e Pesquisa, Instituições Públicas e Privadas.</p>                    
                </div>

                <div className={styles.card}>                    
                    <img 
                        className={styles.cover}
                        src={CoverVision} 
                        alt="" 
                    />
                    <h3>Visão</h3>
                    <p>Ser referência na estruturação de negócios inovadores; atender as demandas das empresas, dos parceiros e da sociedade; ser um negócio autossustentável.</p>                      
                </div>

                <div className={styles.card}>                   
                    <img 
                        className={styles.cover}
                        src={CoverValues} 
                        alt="" 
                    />
                    <h3>Valores</h3>
                    <p>Inovação, Parceria, Comprometimento, Empreendedorismo, Ética, Responsabilidade Social e Inclusão.</p>                      
                </div>

                <div className={styles.card}>                    
                    <img 
                        className={styles.cover}
                        src={Coverpropeller} 
                        alt="" 
                    />
                    <h3>Triplice Hélice</h3>
                    <p>A Tec é um ponto de convergência da Tríplice Hélice no ecossistema de empreendedorismo e inovação da região Norte Fluminense, tendo em sua constituição os elementos clássicos da Tríplice: Indústria, Universidade e Governo.</p>
                </div>

              </div> 

              <section className={styles.team}>
                <div className={styles.executiveTeam} >
                   
                </div>
              </section>           
                                    
            </div>           
            <Team/>
        </div>
    )
}