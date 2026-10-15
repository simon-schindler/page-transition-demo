import styles from './header.styles.module.css'
import { Links } from './links/Links'
export function Header(){
    return(
        <header className={styles.header}>
            <Links/>
        </header>
    )
}