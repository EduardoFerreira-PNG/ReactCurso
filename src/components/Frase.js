import styles from './Frase.module.css'
function Frase() {
    return(
        <div className={styles.frase_container}>
            <h3 className={styles.frase_content}>Este é um componente de uma frase</h3>
        </div>
    )
}

export default Frase