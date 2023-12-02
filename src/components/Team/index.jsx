import { TeamCard } from "../TeamCard";


import avatar1 from "../../assets/avatar-1.png";
import avatar2 from "../../assets/avatar-2.png";
import avatar3 from "../../assets/avatar-3.png";
import avatar4 from "../../assets/avatar-4.png";
import avatar5 from "../../assets/avatar-5.png";
import avatar6 from "../../assets/avatar-6.png";


import styles from './Team.module.css';

console.log(avatar1);
export function Team() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.box}>
                    <header>
                    <h1>Equipe Tec Incubadora</h1>                     
                    </header>  

                    <div className={styles.content}>
                    <TeamCard 
                        URLAvatar={avatar1}
                        Name={'Henrique da Hora'}
                        Office={'Presidente'}
                    />
                    <TeamCard 
                         URLAvatar={avatar2}
                         Name={'Edson Terra'}
                         Office={'Diretor Administrativo'}
                    />
                    <TeamCard 
                        URLAvatar={avatar3}
                        Name={'Luiz Gustavo'}
                        Office={'Diretor Financeiro'}
                    />
                    <TeamCard 
                         URLAvatar={avatar4}
                         Name={'Rodrigo Lira'}
                         Office={'Diretor de Tecnologia'}
                    />
                    <TeamCard 
                         URLAvatar={avatar5}
                         Name={'Adriana Crespo'}
                         Office={'Gerente Administrativa'}
                        
                    />
                    <TeamCard 
                         URLAvatar={avatar6}  
                         Name={'Túlio Baita'} 
                         Office={' Coordenador de Incubação'}
                    />
                </div>                   
                </div>
                
            </section>
        </>

    )
}