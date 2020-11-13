module.exports = {
  siteMetadata: {
    title: `sandromatter.ch`,
    description: `Online Marketing Spezialist und Student an der Fachhochschule Graubünden.`,
    author: `@sandromatter`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NH6W6C2",
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#001AFF`,
        theme_color: `#001AFF`,
        display: `minimal-ui`,
        icon: `src/images/sandromatter-icon.png`, // This path is relative to the root of the site.
      },      
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "Inter\:700",
        ],
        display: "swap"
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
