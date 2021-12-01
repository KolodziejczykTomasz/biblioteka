const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  const result = await graphql(`
    query queryArticles {
      allMdx {
        edges {
          node {
            id           
            fileAbsolutePath
          }
        }
      }
    }
  `)

  result.data.allMdx.nodes.forEach(post => {
    createPage({
      path: `/${post.frontmatter.fileAbsolutePath}`,
      component: blogPostTemplate,
      context: {
        fileAbsolutePath: post.frontmatter.fileAbsolutePath,
      },
    })
  })
}
