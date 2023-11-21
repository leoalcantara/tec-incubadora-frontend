import styles from "./TeamCard.module.css";



import InstagramIcon from '../../assets/icons/icone-insta.svg';
import LinkedinIcon from '../../assets/icons/icone-linkedin.svg';


export function TeamCard(props){
    return (
        <>
        <div className={styles.card}>
        <div className={styles.avatar}>
                    <img src={props.URLAvatar} alt="" />
                </div>
            <div className={styles.header}>            
                
                <h3>{props.Name}</h3>
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