// HMR fix. See https://github.com/gatsbyjs/gatsby/issues/11934 for details
exports.onCreateWebpackConfig = ({ stage, actions }) => {
    if (stage.startsWith("develop")) {
        actions.setWebpackConfig({
            resolve: {
                alias: {
                    "react-dom": "@hot-loader/react-dom",
                },
            },
        })
    }
}
