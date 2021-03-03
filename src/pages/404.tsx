import * as React from "react"
import { Link } from "gatsby"
import { Main } from "../components/main"

export default function NotFound() {
    return (
        <Main title="The page is not found">
            The page is not found. <Link to="/">Home</Link>.
        </Main>
    )
}
