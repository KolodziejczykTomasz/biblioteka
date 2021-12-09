import * as React from "react"
import { Header } from "../components/sections/header"
import { Jumbotron } from "../components/sections/jumbotron"
import { AllPostList } from "../components/sections/AllPost/allPostList"
import { Footer } from "../components/sections/footer"
import Layout from "../layouts/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const AllPostPage = ({ ...props }) => (
  <Layout> 
    <Seo title="Aktualności" />
    <Header />
    <Jumbotron />
    <AllPostList {...props} />
    <Footer />
  </Layout>
)
export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___published, order: DESC }) {
      nodes {
        frontmatter {
          title
          altText
          author
          category
          published
          slug
          featuredImage {
            childImageSharp {
              fluid {
                tracedSVG
                src
                srcSet
              }
            }
          }
          gallery {
            id
            publicURL
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt(pruneLength: 200)
      }
    }
  }
`
export default AllPostPage
