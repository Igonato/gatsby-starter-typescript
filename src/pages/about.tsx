import * as React from "react"
import { Link } from "gatsby"

import { Main } from "../components/main"

export default function About() {
    return (
        <Main title="About">
            <Link to="/">Go home</Link>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                fugit. Rerum sint consequuntur laudantium, deserunt enim saepe
                illum asperiores, assumenda!
            </p>
        </Main>
    )
}
