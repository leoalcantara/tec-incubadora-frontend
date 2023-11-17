import { TeamCard } from "../TeamCard";




import styles from './Team.module.css';


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
                        
                    />
                    <TeamCard 
                        
                    />
                    <TeamCard 
                        
                    />
                    <TeamCard 
                        
                    />
                    <TeamCard 
                        
                    />
                    <TeamCard 
                            
                    />
                </div>                   
                </div>
                
            </section>
        </>

    )
}