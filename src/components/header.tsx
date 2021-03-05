import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

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

    let [theme, setThemeState] =
        typeof localStorage !== "undefined"
            ? useState(localStorage.getItem("theme"))
            : useState("")

    function setTheme(name: string) {
        setThemeState(name)
        if (typeof localStorage !== "undefined") {
            localStorage.setItem("theme", name)
        }
    }

    return (
        <header className={styles.header}>
            <Helmet>
                <body className={theme || undefined} />
            </Helmet>
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

                    <li className={styles.themeSwitcher}>
                        <span
                            className="theme-switch-light"
                            onClick={e => setTheme("light")}
                        >
                            🌞
                        </span>
                        <span
                            className="theme-switch-dark"
                            onClick={e => setTheme("dark")}
                        >
                            🌜
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
