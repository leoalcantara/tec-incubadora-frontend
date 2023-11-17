import styles from "./TeamCard.module.css";

import avatar1 from "../../assets/avatar-1.png";

import InstagramIcon from '../../assets/icons/icone-insta.svg';
import LinkedinIcon from '../../assets/icons/icone-linkedin.svg';


export function TeamCard(){
    return (
        <>
        <div className={styles.card}>
        <div className={styles.avatar}>
                    <img src={avatar1} alt="" />
                </div>
            <div className={styles.header}>            
                
                <h3>Henrique da Hora</h3>
                <p>Presidente</p>
                
                <div className={styles.socialIcons}>
                    <img src={InstagramIcon} alt="" />
                    <img src={LinkedinIcon} alt="" />
                </div>
            </div>
            
        </div>
        </>
    )
}