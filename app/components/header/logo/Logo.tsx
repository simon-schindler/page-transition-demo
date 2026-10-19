import { TransitionLink } from "page-transition"
import styles from "./logoStyles.module.css"
export function Logo(){
    return(
        <div className={styles.wrapper}>
            <TransitionLink href="/">
            page-transition
            </TransitionLink>
        </div>
        
    )
}