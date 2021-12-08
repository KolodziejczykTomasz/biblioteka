import React from "react"
import { graphql } from "gatsby"
import SinglePageTemplate from "../templates/SinglePageTemplate"

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
const GalleryLayout = ({ data }) => (  
    <SinglePageTemplate>
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
      <div>
        <div>Tytuł: {data.mdx.frontmatter.title}</div>
        <div>Publikacja: {data.mdx.frontmatter.published}</div>
      </div>
    </SinglePageTemplate>  
)

export default GalleryLayout
