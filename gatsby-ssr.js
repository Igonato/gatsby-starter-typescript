/**
 * Apply saved dark/light theme, if saved, before the page is rendered
 */
import * as React from "react"

const BodyScript = () => {
    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `
(function() {
    var theme = typeof localStorage !== "undefined"
        ? localStorage.getItem("theme")
        : ""
    if (theme && typeof document !== "undefined") {
        document.body.classList.add(theme)
    }
})()
`,
            }}
        />
    )
}
export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents(<BodyScript />)
}
