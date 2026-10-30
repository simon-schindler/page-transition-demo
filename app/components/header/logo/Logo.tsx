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
                v 0.1.0-beta.59
            </div>
        </>
        
    )
}