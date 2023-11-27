import styles from './Companies.module.css';

import {CompaniesCard} from '../CompaniesCard'

import Logo1 from '../../assets/empresas/graduadas/cluub.png';
import Logo2 from '../../assets/empresas/graduadas/cubbo.png';
import Logo3 from '../../assets/empresas/graduadas/ecore.png';
import Logo4 from '../../assets/empresas/graduadas/fulltype.png';
import Logo5 from '../../assets/empresas/graduadas/inside-fx.png';
import Logo6 from '../../assets/empresas/graduadas/invision.png';
import Logo7 from '../../assets/empresas/graduadas/me-passa-ai.png';
import Logo8 from '../../assets/empresas/graduadas/portal-arquitetura.png';
import Logo9 from '../../assets/empresas/graduadas/rio-norte.png';
import Logo10 from '../../assets/empresas/graduadas/roveq.png';
import Logo11 from '../../assets/empresas/graduadas/lincar.png';
import Logo12 from '../../assets/empresas/graduadas/pediu-farma.png';
import Logo13 from '../../assets/empresas/graduadas/saluber.png';


export function Companies() {
    return (
        <section className={styles.container}>
            <div className={styles.header}>  
                <div className={styles.box}>
                    <h1 className={styles.title}>Empresas Graduadas</h1>
                    <p>Conheça as empresas que estão incubadas em nossa instituição</p>
                </div>                
                
            </div>
            <div className={styles.box}>
                 
                <div className={styles.content}>
                  
                    <CompaniesCard
                        URLLogo={Logo1}
                        Name={"Cluub"}
                    />
                     <CompaniesCard
                        URLLogo={Logo2}
                        Name={"Cubbo"}
                    />

                     <CompaniesCard
                        URLLogo={Logo3}
                        Name={"Ecore"}
                    />
                   
                   <CompaniesCard
                        URLLogo={Logo4}
                        Name={"fulltype"}
                    />

                     <CompaniesCard
                        URLLogo={Logo5}
                        Name={"Inside fx"}
                    />

                    <CompaniesCard
                        URLLogo={Logo6}
                        Name={"Invision"}
                    />

                      <CompaniesCard
                        URLLogo={Logo7}
                        Name={"Me passa aí"}
                    />
                      <CompaniesCard
                        URLLogo={Logo8}
                        Name={"Portal Arquitetura"}
                    />
                      <CompaniesCard
                        URLLogo={Logo9}
                        Name={"Rio Norte"}
                    />
                      <CompaniesCard
                        URLLogo={Logo10}
                        Name={"Roveq"}
                    />
                      <CompaniesCard
                        URLLogo={Logo11}
                        Name={"Lincar"}
                    />
                      <CompaniesCard
                        URLLogo={Logo12}
                        Name={"Pediufarma"}
                    />
                      <CompaniesCard
                        URLLogo={Logo13}
                        Name={"Saluber"}
                    />
                     
                </div>
            </div>
        </section>
    )
}