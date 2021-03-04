import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Main } from "../components/main"

export default function Home() {
    return (
        <Main title="Home">
            Hello, World! <Link to="/about">About</Link>{" "}
            <Link to="/contact">Contact</Link>
            <StaticImage
                src="../images/cat.jpg"
                quality={95}
                alt="A cat"
                style={{ width: `100%` }}
            />
        </Main>
    )
}
