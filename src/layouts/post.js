import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import SinglePageTemplate from "../templates/SinglePageTemplate"

import styled from "styled-components"

const Wrapper = styled.div``

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
const PostLayout = ({ data }) => {
  const srcImage = data.mdx.frontmatter.featuredImage.childImageSharp.fluid.src

  return (
    <SinglePageTemplate>
      <Wrapper>
        <div>
          <div>Tytuł: {data.mdx.frontmatter.title}</div>
          <div>
            Photo:
            <img src={srcImage} alt={data.mdx.frontmatter.title} />
          </div>
          <div>
            Treść: <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </div>
          <div>Publikacja: {data.mdx.frontmatter.published}</div>
          <div>Kategoria: {data.mdx.frontmatter.category}</div>
          <div>Autor: {data.mdx.frontmatter.author}</div>
        </div>
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
      </Wrapper>
    </SinglePageTemplate>
  )
}

export default PostLayout
