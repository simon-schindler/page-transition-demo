"use client"

import { TransitionLink } from "page-transition/css"
import { useActiveLink } from "page-transition"

export function Links(){
    const { saveRef } = useActiveLink()

    const links =[
        {linkName: "HOME", href: "/"},
        {linkName: "ABOUT", href: "/about"},
        {linkName: "CONTACT", href: "/contact"}
    ]

    return(
        <ul>
            {
                links.map((link, i)=>(
                    <li key={i} ref={saveRef(link.href)}>
                        <TransitionLink href={link.href}>
                            {link.linkName}
                        </TransitionLink>
                    </li>
                ))
            }

        </ul>
    )
}