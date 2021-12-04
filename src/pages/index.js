import * as React from "react"
import { Header } from "../components/sections/header"
import { Jumbotron } from "../components/sections/jumbotron"
import { NewsList } from "../components/sections/newsList"
import { EventsList } from "../components/sections/eventsList"
import { GalleryList } from "../components/sections/galleryList"
import { Footer } from "../components/sections/footer"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

import styled from "styled-components"

const Wrapper = styled.div``

const IndexPage = ({ ...props }) => (
  <Layout>
    <Seo title="Home" />
    <Wrapper>
      <Header />
      <Jumbotron />
      <NewsList {...props} />
      <EventsList />
      <GalleryList />
      <Footer />
    </Wrapper>
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
