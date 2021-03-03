import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Main } from "../components/main"

export default function Home() {
    return (
        <Main title="Home">
            Hello, World!
            <StaticImage
                src="../images/cat.jpg"
                quality={95}
                alt="A cat"
                style={{ width: `100%` }}
            />
        </Main>
    )
}
