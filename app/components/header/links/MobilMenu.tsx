"use client"

import { useState } from "react"

import styles from "./mobilStyles.module.css"

import { Links } from "./Links"

export function MobilMenu(){
    const [open, setOpen]=useState(true)
    
    return(
        <div className={`${styles.wrapper} ${open ? styles.open:''}`}>
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