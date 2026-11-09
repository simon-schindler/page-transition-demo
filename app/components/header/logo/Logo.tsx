import { TransitionLink } from "page-transition/css"
import styles from "./logoStyles.module.css"
export function Logo(){
    return(
        <>
            <div className={styles.wrapper}>
                <TransitionLink href="/">
                page-transition
                </TransitionLink>
            </div>
            <div className={styles.version}>
                v0.2.1
            </div>
        </>
        
    )
}