import * as React from "react"
import { Link } from "gatsby"

export default function NotFound() {
    return (
        <div>
            The page is not found. <Link to="/">Home</Link>.
        </div>
    )
}
