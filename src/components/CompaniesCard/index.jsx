import styles from './CompaniesCard.module.css';

import BannerImage from '../../assets/banner.jpg';

export function Cards () {    
    return (
       <div className={styles.container}>
            <div className={styles.box}>
                <img src={BannerImage} alt="" />
            </div>

       </div>
    );
}