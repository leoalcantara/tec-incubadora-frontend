import  styles from './NotFound.module.css'

export function NotFound (){
    <div className= { styles.container }>
    <div className={styles.box}>          
        <img className={styles.errorimg} src={ ErrorImage } alt="" />
        <h1>Página em construção</h1>
        <p> Oops... essa página ainda não está disponível.</p>
        <p>Retorne em breve para ter acesso.</p>
        <button type='submit'>Voltar</button>
    </div>
</div> 
}