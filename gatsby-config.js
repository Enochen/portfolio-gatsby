/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Enoch Chen`,
    description: `Hey! I'm Enoch - a Computer Science student at Cornell University. I do cool things sometimes.`,
    siteUrl: `https://enochen.me`,
    author: `Enoch Chen`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Enoch Chen`,
        short_name: `Enoch`,
        start_url: `/`,
        background_color: `#f3f3f3`,
        theme_color: `#6460b8`,
        display: `browser`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: path.join(__dirname, `static`, `projects`),
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: null,
        policy: [{ userAgent: '*', allow: '/', disallow: '/misc' }],
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-background-image`,
    `gatsby-plugin-offline`,
  ],
}
