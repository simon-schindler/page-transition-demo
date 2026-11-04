"use client"

import styles from "./desktopStyles.module.css"

import { Links } from "./Links"
import { useInitContext } from '../../context/InitContext'

export function DesktopMenu(){
    const { loaded } = useInitContext()
    return(
        <div className={`${styles.wrapper} ${loaded ? styles.loaded:''}`}>
            <Links />
        </div>
    )
}