"use client"
import { useEffect,  useState } from "react"

import styles from "./headlineStyles.module.css"
interface Props{
    headline: string
}
export function Headline({headline}:Props){
    const [mounted, setMounted]=useState(false)
    useEffect(()=>{
        void document.documentElement.offsetWidth
        setMounted(true)
    },[])
    return(
        <h1 className={styles.h1}>
            <div className={`${styles.headline} ${mounted ? styles.mounted:''}`}>
                { headline }
            </div>
        </h1>
    )
}