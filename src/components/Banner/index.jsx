import styles from './Banner.module.css';

import BannerImage from '../../assets/banner.jpg';

export function Banner () {    
    return (
       <div className={styles.container}>
            <div className={styles.box}>
                <img src={BannerImage} alt="" />
            </div>

       </div>
    );
}