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
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "pages",
        engine: "flexsearch",
        engineOptions: "speed",
        query: `
          {
            allMdx (sort: { fields: [frontmatter___published], order: DESC }){
              nodes {                
                id
                frontmatter {
                  title
                  slug
                  published
                  excerpt
                }
                rawBody  
                body              
              }
            }
          }
        `,
        ref: "id",
        index: ["title", "rawBody", "excerpt", "body"],
        store: ["id", "slug", "title", "rawBody", "excerpt", "body"],

        normalizer: ({ data }) =>
          data.allMdx.nodes.map(node => ({
            id: node.id,
            title: node.frontmatter.title,
            slug: node.frontmatter.slug,
            body: node.body,
            rawBody: node.rawBody,
          })),
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
