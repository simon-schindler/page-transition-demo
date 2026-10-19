"use client"

import styles from "./mobilStyles.module.css"

import { Links } from "./Links"

export function MobilMenu(){
    return(
        <div className={styles.wrapper}>
            <button 
            className={styles.button}
            aria-label="Open menu"
            >
                Menu
            </button>
            <Links/>
        </div>
    )
}