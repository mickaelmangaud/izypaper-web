/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IzyPaper`,
        short_name: `IzyPaper`,
        start_url: `/`,
        background_color: `#048b9a`,
        theme_color: `#048b9a`,
        display: `standalone`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     workboxConfig: {
    //        globPatterns: ['**/*']
    //     }
    //  }
    },
  ],
}
