import ErrorImage from '../assets/error.svg';
import styles from './ErrorBox.module.css';

export function ErrorBox() {
    return (
        <div className= { styles.container }>
            <div className={styles.box}>          
                <img className={styles.errorimg} src={ ErrorImage } alt="" />
                <h3>Página em Construção</h3>
                <span> Oops... essa página ainda não está disponível.<br/> 
                Retorne em breve para ter acesso.</span>
                <button type='submit'>Voltar</button>
            </div>
        </div>   
    )
}