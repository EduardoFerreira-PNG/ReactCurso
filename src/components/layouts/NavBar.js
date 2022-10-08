import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
function NavBar(){
    return(
        <ul className={styles.list}>
        <li className={styles.item}><Link to="/"> Home</Link>{/* tag especial para rotear com router igual o "a" do html*/}</li> 
        <li className={styles.item}><Link to="/empresa"> Empresa</Link>{/* tag especial para rotear com router igual o "a" do html*/}</li>
        <li className={styles.item}><Link to="/contato"> Contato</Link>{/* tag especial para rotear com router igual o "a" do html*/}</li>      
     </ul>
    )
}

export default NavBar