"use client"

import { useEffect, useState } from 'react'

import styles from './header.styles.module.css'

import { Logo } from './logo/Logo'

import { DesktopMenu } from './links/DesktopMenu'
import { MobilMenu } from './links/MobilMenu'

export function Header(){

    const [mobil, setMobil]=useState(false)
    
    useEffect(()=>{
        const m = matchMedia("(max-width: 749px)")
        setMobil(m.matches)
        const handleChange=(e: MediaQueryListEvent)=>{
            setMobil(e.matches)
            document.documentElement.style.setProperty('--animationDesktop', e.matches?  'none':'fadeIn 0.3s linear forwards')
            document.documentElement.style.setProperty('--animationMobil', e.matches?  'fadeIn 0.3s linear forwards':'none')
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