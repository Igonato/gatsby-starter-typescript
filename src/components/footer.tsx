import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

export function Footer() {
    let author = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `).site?.siteMetadata?.author
    return (
        <footer>
            © {new Date().getFullYear()} {author}
        </footer>
    )
}

export default Footer
