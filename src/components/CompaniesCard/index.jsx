import styles from './CompaniesCard.module.css';

import Logo1 from '../../assets/empresas/graduadas/cluub.png';

export function CompaniesCard (props) {    
    return (
       <div className={styles.card}>
            <div className={styles.box}>
                <img src={props.URLLogo} alt="" />
            </div>

       </div>
    );
}