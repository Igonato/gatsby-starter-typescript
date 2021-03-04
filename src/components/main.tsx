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

import * as styles from "./main.module.css"

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
        <div className={styles.rootContainer}>
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

            <div className={styles.headerWrapper}>
                <Header />
            </div>

            <div className={styles.mainWrapper}>
                <main>{children}</main>
            </div>

            <div className={styles.footerWrapper}>
                <Footer />
            </div>
        </div>
    )
}

export default Main
