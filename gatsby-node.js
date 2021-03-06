const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  const result = await graphql(`
    query queryArticles {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  result.data.allMdx.nodes.forEach(post => {
    createPage({
      path: `/${post.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })

const galleryPostTemplate = path.resolve(`src/layouts/gallery.js`)
const resultGallery = await graphql(`
  query queryArticles {
    allMdx {
      nodes {
        frontmatter {
          slug
        }
      }
    }
  }
`)

resultGallery.data.allMdx.nodes.forEach(post => {
  createPage({
    path: `gallery/${post.frontmatter.slug}`,
    component: galleryPostTemplate,
    context: {
      slug: post.frontmatter.slug,
    },
  })
})





}
