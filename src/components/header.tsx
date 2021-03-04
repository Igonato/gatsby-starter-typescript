import * as React from "react"
import { Link } from "gatsby"

import * as styles from "./header.module.css"

export function Header() {
    let navLinks = [
        {
            name: "Home",
            to: "/",
        },
        {
            name: "About",
            to: "/about/",
        },
        {
            name: "Contact",
            to: "/contact/",
        },
    ]

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">Gatsby Starter TypeScript</Link>
            </div>
            <nav aria-label="Primary navigation" className={styles.nav}>
                <ul>
                    {navLinks.map((link, i) => (
                        <li key={link.to}>
                            <Link to={link.to} activeClassName={styles.active}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header
