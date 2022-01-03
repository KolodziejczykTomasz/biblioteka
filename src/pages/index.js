import React from "react"
import { graphql } from "gatsby"
import { NewsList } from "../components/sections/NewsList/newsList"
import { EventsList } from "../components/sections/EventsList/eventsList"
import { GalleryList } from "../components/sections/GalleryList/galleryList"

import  MainPageTemplate from "../templates/MainTemplate"

import Seo from "../components/seo"

const IndexPage = ({ ...props }) => (
  <MainPageTemplate>
    <Seo title="Home" />
    <NewsList {...props} />
    <EventsList />
    <GalleryList {...props} />
  </MainPageTemplate>
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
export default IndexPage
