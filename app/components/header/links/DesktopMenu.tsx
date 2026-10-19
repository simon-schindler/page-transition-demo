"use client"

import styles from "./desktopStyles.module.css"

import { Links } from "./Links"

export function DesktopMenu(){
    return(
        <div className={styles.wrapper}>
            <Links />
        </div>
    )
}