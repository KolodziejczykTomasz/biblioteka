import React from "react"
import { graphql } from "gatsby"
import { Header } from "../components/sections/header"
import { Jumbotron } from "../components/sections/jumbotron"
import { NewsList } from "../components/sections/NewsList/newsList"
import { EventsList } from "../components/sections/EventsList/eventsList"
import { GalleryList } from "../components/sections/GalleryList/galleryList"
import { Footer } from "../components/sections/footer"
import Layout from "../layouts/layout"
import Seo from "../components/seo"



const IndexPage = ({ ...props }) => (
  <Layout>
    <Seo title="Home" />
      <Header />
      <Jumbotron />
      <NewsList {...props} />
      <EventsList />
      <GalleryList {...props} />
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
export default IndexPage
