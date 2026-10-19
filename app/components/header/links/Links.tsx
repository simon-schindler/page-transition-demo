"use client"

import { TransitionLink } from "page-transition"

export function Links(){

    const links =[
        {linkName: "HOME", href: "/"},
        {linkName: "ABOUT", href: "/about"},
        {linkName: "CONTACT", href: "/contact"}
    ]

    return(
        <ul>
            {
                links.map((link, i)=>(
                    <li key={i}>
                        <TransitionLink href={link.href}>
                            {link.linkName}
                        </TransitionLink>
                    </li>
                ))
            }

        </ul>
    )
}