import styles from "./ServicesCard.module.css";

export function ServicesCard(){
    return (
        <>
        <div className={styles.card}>
            <header>
                <h3>Incubação</h3>
                <span>Como incubadora, promovemos a integração entre universidade, indústria e sociedade. Fomentamos empresas de base tecnológica.</span>
            </header>

        </div>
        </>
    )
}