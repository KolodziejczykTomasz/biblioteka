import * as React from "react"
import { graphql } from "gatsby"
import { GalleryAllList } from "../components/sections/GalleryList/galleryAllList"
import SinglePageTemplate from "../templates/SinglePageTemplate"
import Seo from "../components/seo"

const GalleryPage = ({ ...props }) => (
  <SinglePageTemplate>
    <Seo title="Galeria" />
    <GalleryAllList {...props} />
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
              gatsbyImageData(layout: CONSTRAINED)
              resize {
                aspectRatio
              }
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
export default GalleryPage
