"use client"
import { useEffect,  useState } from "react"
import { useInitContext } from "./context/InitContext"

import styles from "./headlineStyles.module.css"
interface Props{
    headline: string
}
export function Headline({headline}:Props){
    const {loaded, setLoaded}=useInitContext()
    const [mounted, setMounted]=useState(!loaded)
    useEffect(()=>{
        if(!loaded){
            setLoaded(true)
            return
        }
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