/**
 * Main wrapper for our website. If you're familiar with Gatsby's
 * default starters, it combines Layout and SEO components. Those are
 * often imported and used together anyway, so this consolidated
 * approach simplifies pages and templates at the cost of being a
 * little more complex itself.
 */

import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

import { Footer } from "./footer"
import { Header } from "./header"

interface MainProps {
    children: React.ReactNode
    title?: string
    lang?: string
    meta?: [{ name: string; content: string }]
}

export function Main({ children, title, lang, meta }: MainProps) {
    interface siteMetadataQueryResult {
        site: {
            siteMetadata: {
                title?: string
                description?: string
                author?: string
                lang?: string
            }
        }
    }
    let defaultMeta = (useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    lang
                }
            }
        }
    `) as siteMetadataQueryResult).site.siteMetadata

    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang: lang || defaultMeta.lang,
                }}
                defer={false}
                title={title || `${defaultMeta.title}`}
                meta={[
                    {
                        name: `description`,
                        content: defaultMeta.description,
                    },
                    {
                        name: `author`,
                        content: defaultMeta.author,
                    },
                    ...(meta || []),
                ]}
            ></Helmet>

            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Main
