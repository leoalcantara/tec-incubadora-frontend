import styles from './Footer.Module.css';
import  {Link} from 'react-router-dom';

import FacebookIcon from '../../assets/icons/icone-face.svg';
import InstagramIcon from '../../assets/icons/icone-insta.svg';
import LinkedinIcon from '../../assets/icons/icone-linkedin.svg';
import YoutubeIcon from '../../assets/icons/icone-youtube.svg';

export function Footer (){
    return (
        <footer className={styles.footer}>
          <div className={styles.container}> 
            <div className={styles.row}>

                <div className={styles.columm}>
                    <h2 className={styles.heading}>Tec Incubadora</h2>
                    <Link to= "/" className={styles.footerlink}> Home </Link >
                    <Link to= "sobre" className={styles.footerlink}> Sobre Nós </Link >
                    <Link to= "equipe" className={styles.footerlink}> Equipe </Link >
                    <Link to= "contato" className={styles.footerlink}> Contato </Link >                   

                    <div className={styles.socialMedia}>                        
                        <a href="https://www.youtube.com/@tecincubadora1303" target='_blank'><img src={YoutubeIcon} alt="" /></a>
                        <a href="https://www.linkedin.com/company/tecincubadora/" target='_blank'><img src={LinkedinIcon} alt="" /></a>                       
                        <a href="https://www.instagram.com/tec.incubadora" target='_blank'><img src={InstagramIcon} alt="" /></a>
                        <a href="https://facebook.com/tec.incubadora" target='_blank'><img src={FacebookIcon} alt="" /></a>
                    </div>

                </div>                    

                <div className={styles.columm}>
                    <h2 className={styles.heading}>Serviços</h2>

                    <a href="#" className={styles.footerlink}>Incubação</a>
                    <a href="#" className={styles.footerlink}>Graduação</a>
                    <a href="#" className={styles.footerlink}>Consultorias</a>
                    <a href="#" className={styles.footerlink}>PDCE</a>
                    <a href="#" className={styles.footerlink}>Coworking</a>
                    <a href="#" className={styles.footerlink}>Aluguel de Salas</a>
                   
                </div>

                <div className={styles.columm}>
                    <h2 className={styles.heading}>Empresas</h2>

                    <a href="#" className={styles.footerlink}>Incubadas</a>
                    <a href="#" className={styles.footerlink}>Graduadas</a>
                    <a href="#" className={styles.footerlink}>Que passou por aqui</a>
                </div>

                <div className={styles.columm}>
                    <h2 className={styles.heading}>Comunicação</h2>

                    <a href="#" className={styles.footerlink}>Agendas</a>
                    <a href="#" className={styles.footerlink}>Notícias</a>
                    <a href="https://open.spotify.com/show/2fb9nx1HLxm1Ok9UFy1OFO?si=c4bc3107b2ac4bde&nd=1&dlsi=83919e17261f4f41" target='_blank' className={styles.footerlink}>Podcast</a>
                    <a href="https://www.youtube.com/@tecincubadora1303" target='_blank' className={styles.footerlink}>Tec Tube</a>
                </div>
                
            </div>
          </div>  
        </footer>
    )
}