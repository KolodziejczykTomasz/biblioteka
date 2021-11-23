module.exports = {
  siteMetadata: {
    title: `Biblioteka w Kraszewie`,
    description: `Biblioteka Publiczna Gminy Lidzbark Warmiński w Kraszewie`,
    author: `@Nettom`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,    
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
