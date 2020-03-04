/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: 'Newbie Blog',
        descriptions: 'I have no idea what im doing',
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/layout.js'),
                },
                gatsbyRemarkPlugins: [{resolve: 'gatsby-remark-images'}],
                plugins: [{resolve: 'gatsby-remark-images'}],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: 'posts',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: 'images',
            },
        },
        {
            resolve: 'gatsby-source-instagram',
            options: {
                username: 'gatsbyjs',
            },
        },
        {
            resolve: 'gatsby-plugin-webpack-bundle-analyzer',
            options: {
                production: true,
                disable: !process.env.ANALYZE_BUNDLE_SIZE,
                generateStatsFile: true,
                analyzerMode: 'static',
            },
        },
    ],
}
