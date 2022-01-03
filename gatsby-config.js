module.exports = {
  siteMetadata: {
    title: `Biblioteka w Kraszewie`,
    description: `Biblioteka Publiczna Gminy Lidzbark Warmiński w Kraszewie`,
    author: `Nettom`,
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/data/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/data/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {    
        name: 'pages',
        engine: 'flexsearch',
        engineOptions: 'speed',
        query: `
          {
            allMarkdownRemark {
              nodes {
                id
                frontmatter {
                  path
                  title
                }
                rawMarkdownBody
              }
            }
          }
        `,
        ref: 'id',
        index: ['title', 'body'],
        store: ['id', 'path', 'title'],

       
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map((node) => ({
            id: node.id,
            path: node.frontmatter.path,
            title: node.frontmatter.title,
            body: node.rawMarkdownBody,
          })),
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
