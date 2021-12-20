import * as React from "react"
import { AllPostList } from "../components/sections/AllPost/allPostList"
import { graphql } from "gatsby"
import SinglePageTemplate from "../templates/SinglePageTemplate"
import Seo from "../components/seo"


const AllPostPage = ({ ...props }) => (
  <SinglePageTemplate>
    <Seo title="Aktualności" />    
    <AllPostList {...props} /> 
  </SinglePageTemplate>
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
        body
        excerpt(pruneLength: 200)
      }
    }
  }
`
export default AllPostPage
