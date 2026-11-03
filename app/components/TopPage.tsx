import styles from "./topPage.styles.module.css"
import { Headline } from "./Headline"
export function TopPage({headline}:{headline: string}){
    return(
        <section className={styles.section}>
            <Headline headline={headline}/>
        </section>
    )
}