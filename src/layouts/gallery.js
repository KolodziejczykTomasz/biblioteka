import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
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
  query querySingleArticle($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        altText
        author
        category
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
      excerpt
      body
    }
  }
`
const GalleryLayout = ({ data }) => {
  const srcImage = data.mdx.frontmatter.featuredImage.childImageSharp.fluid.src

  return (
    <>
      
      <div>
        <div>Galeria</div>
        <ul>
          {data.mdx.frontmatter.gallery.slice(0, 3).map(item => (
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
          <div>Kategoria: {data.mdx.frontmatter.category}</div>
          <div>Autor: {data.mdx.frontmatter.author}</div>
        </div>
      </StyledWrapper>
    </>
  )
}

export default GalleryLayout
