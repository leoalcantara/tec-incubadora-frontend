import styles from "./ServicesCard.module.css";

import ProgramImage from "../../assets/icons/Incubação.svg"

export function ServicesCard(props){
    return (
        <>
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.circle}>
                    <img src={ProgramImage} alt="" />
                </div>
                <div className={styles.title}>
                    <h2>{props.title}</h2>
                </div>
            </div>
            <div className={styles.content}>
                {props.content}
            </div>
        </div>
        </>
    )
}