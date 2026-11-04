"use client"

import { useState } from "react"

import styles from "./mobilStyles.module.css"

import { Links } from "./Links"
import { useInitContext } from '../../context/InitContext'

export function MobilMenu(){
    
    const [open, setOpen]=useState(true)
    const { loaded } = useInitContext()

    return(
        <div className={`${styles.wrapper} ${open ? styles.open:''} ${loaded ? styles.loaded:''}`} >
            <button 
            className={`${styles.button} ${open ? styles.open:''}`}
            aria-label="Open menu"
            onClick={()=>{
                setOpen((prev)=>!prev)
            }}
            >
                Menu
            </button>
            <Links/>
        </div>
    )
}