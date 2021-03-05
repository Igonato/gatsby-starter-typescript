import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Main } from "../components/main"

export default function Home() {
    return (
        <Main title="Home">
            <h1>Hello, World!</h1>
            <p>
                I'm a minimalistic Gatsby v3.0 starter, set up for development
                with TypeScript out of the box. Included:
            </p>
            <ul>
                <li>gatsby-plugin-image and supporting plugins;</li>
                <li>gatsby-plugin-react-helmet;</li>
                <li>typescript-plugin-css-modules;</li>
                <li>Basic header-main-footer layout;</li>
                <li>CSS normalize and some minimal styles;</li>
                <li>Simple dark/lite theming with switching support.</li>
            </ul>
            <figure>
                <StaticImage
                    src="../images/cat.jpg"
                    quality={95}
                    alt="A cat"
                    style={{ width: `100%` }}
                />
                <figcaption>
                    <span>
                        Photo by{" "}
                        <a href="https://unsplash.com/@madhatterzone?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                            Manja Vitolic
                        </a>{" "}
                        on{" "}
                        <a href="https://unsplash.com/@igonato/likes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                            Unsplash
                        </a>
                    </span>
                </figcaption>
            </figure>
        </Main>
    )
}
