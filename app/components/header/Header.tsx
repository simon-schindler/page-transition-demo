"use client"

import { useEffect, useState } from 'react'

import styles from './header.styles.module.css'

import { Logo } from './logo/Logo'

import { DesktopMenu } from './links/DesktopMenu'
import { MobilMenu } from './links/MobilMenu'

export function Header(){

    const [mobil, setMobil]=useState(false)
    
    useEffect(()=>{
        const m = matchMedia("(max-width: 599px)")
        setMobil(m.matches)
        const handleChange=(e: MediaQueryListEvent)=>{
            setMobil(e.matches)
        }
        m.addEventListener('change', handleChange)
        return()=>m.removeEventListener('change', handleChange)
    },[])

    return(
        <header className={styles.header}>
            <Logo/>
            {
                mobil ? <MobilMenu/> : <DesktopMenu/>
            }
        </header>
    )
}