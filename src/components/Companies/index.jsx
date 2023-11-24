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
                    />
                     <CompaniesCard
                        URLLogo={Logo2}
                    />

                     <CompaniesCard
                        URLLogo={Logo3}
                    />
                   
                   <CompaniesCard
                        URLLogo={Logo4}
                    />

                     <CompaniesCard
                        URLLogo={Logo5}
                    />

                    <CompaniesCard
                        URLLogo={Logo6}
                    />

                      <CompaniesCard
                        URLLogo={Logo7}
                    />
                      <CompaniesCard
                        URLLogo={Logo8}
                    />
                      <CompaniesCard
                        URLLogo={Logo9}
                    />
                      <CompaniesCard
                        URLLogo={Logo10}
                    />
                      <CompaniesCard
                        URLLogo={Logo11}
                    />
                      <CompaniesCard
                        URLLogo={Logo12}
                    />
                      <CompaniesCard
                        URLLogo={Logo13}
                    />
                     
                </div>
            </div>
        </section>
    )
}