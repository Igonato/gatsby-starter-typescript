# Gatsby "Hello, World!" TypeScript Starter

Bare-bones Gatsby project similar to the [gatsbyjs/gatsby-starter-hello-world][0]
but using TypeScript with some other tweaks, specifically:

-   Added `typescript` and `typescript-plugin-css-modules` as dependencies
-   Added tsconfig.json
-   Added `type-check` npm script
-   Added basic 404 page
-   Page files converted to .tsx
-   React-Hot-Loader patch for [gatsbyjs/gatsby/issues/11934][1]
-   Added `"tabWidth": 4` in `.prettierrc` since 4-space tabs seem to be
    more common amongst the TypeScript crowd.

[0]: https://github.com/gatsbyjs/gatsby-starter-hello-world
[1]: https://github.com/gatsbyjs/gatsby/issues/11934
