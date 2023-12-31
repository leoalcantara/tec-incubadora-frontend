import styles from './NotFound.module.css';
import ErrorImage from '../../assets/error.svg'

import { useNavigate } from 'react-router-dom';

export function NotFound() {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <img className={styles.errorimg} src={ErrorImage} alt="" />
                <h1>Página em construção</h1>
                <p> Oops... essa página ainda não está disponível.</p>
                <p>Retorne em breve para ter acesso.</p>
                <button onClick={()=> navigate(-1)}>Voltar</button>
            </div>
        </div>
    )
}