import React from "react"
import { graphql } from "gatsby"

import styled from "styled-components"

const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;
  height: 90%;
  padding-bottom: 75px;
`

export const query = graphql`
  query querySingleGallery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        published
        gallery {
          childImageSharp {
            fluid {
              srcSet
              src
              tracedSVG
              originalName
            }
          }
        }
      }
    }
  }
`
const GalleryLayout = ({ data }) => {
  return (
    <>
      <div>
        <div>Galeria</div>
        <ul>
          {data.mdx.frontmatter.gallery.map(item => (
            <li key={item.childImageSharp.fluid.originalName}>
              <img
                src={item.childImageSharp.fluid.src}
                alt={item.childImageSharp.fluid.originalName}
              />
            </li>
          ))}
        </ul>
      </div>
      <StyledWrapper>
        <div>
          <div>Tytuł: {data.mdx.frontmatter.title}</div>
          <div>Publikacja: {data.mdx.frontmatter.published}</div>
        </div>
      </StyledWrapper>
    </>
  )
}

export default GalleryLayout
