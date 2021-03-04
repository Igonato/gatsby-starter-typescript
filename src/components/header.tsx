import * as React from "react"
import { Link } from "gatsby"

export function Header() {
    let navLinks = [
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
        <header>
            <div>
                <Link to="/">Gatsby Starter TypeScript</Link>
            </div>
            <nav aria-label="Primary navigation">
                <ul>
                    {navLinks.map((link, i) => (
                        <li key={link.to}>
                            <Link to={link.to} activeClassName="active">
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
