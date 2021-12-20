import React from "react"
import { graphql } from "gatsby"
import { VerticalLine } from "../components/icons/"
import SinglePageTemplate from "../templates/SinglePageTemplate"

import styled from "styled-components"

export const query = graphql`
  query querySingleGallery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        author
        category
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

const WrapperWide = styled.div`
  width: 100%;
  height: auto;
`
const WrapperShort = styled.div`
  display: flex;
  margin: 0 144px;
  padding: 20px 15px 80px 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Title = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  font-size: 32px;
  font-weight: 700;
  min-height: 70px;
  height: auto;
  border-bottom: 1px solid grey;
`
const Meta = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  width: 100%;
  color: grey;
  margin-top: 7px;
`

const Author = styled.div``

const Published = styled.div``

const Category = styled.div``

const WrapperGallery = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);  
  column-gap: 5px;
  row-gap: 10px; 
  margin-top: 30px;
`

const WrapperPhoto = styled.div`
  display: grid;
  width: 290px;
  height: 290px;
  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const GalleryLayout = ({ data }) => {
    const start = data.mdx.frontmatter.published

    const day = start.slice(8, 10)
    const year = start.slice(0, 4)
    const Month = start.slice(5, 7)

    const getMonthName = Month => {
      const d = new Date()
      d.setMonth(Month - 1)
      const monthName = d.toLocaleString("default", { month: "long" })
      return monthName
    }

    const mName = getMonthName(Month)
  return(

  <SinglePageTemplate>
    <WrapperWide>
      <WrapperShort>
        <Title>{data.mdx.frontmatter.title}</Title>
        <Meta>
          <Author>{data.mdx.frontmatter.author}</Author>
          <VerticalLine />
          <Published>
            {day} {mName} {year}r.
          </Published>
          <VerticalLine />
          <Category>{data.mdx.frontmatter.category}</Category>
        </Meta>
        <WrapperGallery>
          {data.mdx.frontmatter.gallery.map(item => (
            <WrapperPhoto key={item.childImageSharp.fluid.originalName}>
              <img
                src={item.childImageSharp.fluid.src}
                alt={item.childImageSharp.fluid.originalName}
              />
            </WrapperPhoto>
          ))}
        </WrapperGallery>
      </WrapperShort>
    </WrapperWide>
  </SinglePageTemplate>
)}

export default GalleryLayout
