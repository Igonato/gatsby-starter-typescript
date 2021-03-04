import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Main } from "../components/main"

export default function Home() {
    return (
        <Main title="Home">
            <p>
                Lorem ipsum, dolor sit amet consectetur, adipicing 69 characters
                here
            </p>
            Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Illo sunt
            impedit, voluptatem, nulla odio cupiditate voluptate repellendus
            sapiente quos ab quisquam dolorum deserunt tenetur distinctio
            debitis praesentium doloremque? Excepturi voluptates alias,
            voluptas? Nulla consectetur ullam repellendus consequuntur error,
            quis, accusantium!
            <StaticImage
                src="../images/cat.jpg"
                quality={95}
                alt="A cat"
                style={{ width: `100%` }}
            />
        </Main>
    )
}
