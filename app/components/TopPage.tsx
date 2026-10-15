import styles from "./topPage.styles.module.css"
export function TopPage({headline}:{headline: string}){
    return(
        <section className={styles.section}>
            <h1>{headline}</h1>
        </section>
    )
}