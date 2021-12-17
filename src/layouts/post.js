import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { VerticalLine } from "../components/icons/"

import SinglePageTemplate from "../templates/SinglePageTemplate"

import styled from "styled-components"

export const query = graphql`
  query querySingleArticle($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
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
  box-shadow: 10px 10px 10px rgba(83, 83, 83, 0.63);
`
const Title = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  font-size: 32px;
  font-weight: 700;
  height: 70px;
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

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 18px;
`

const Description = styled.div`
  padding: 20px 10px 20px 0;
`

const Photos = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  height: auto;
`

const PhotoMain = styled.div`
  padding-bottom: 2px;
`

const PhotoGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2px;
  height: 150px;
  & img {
    display: block;
    width: 100%;
    height: 50%;
    object-fit: cover;
  }
`

const PostLayout = ({ data }) => {
  const srcImage = data.mdx.frontmatter.featuredImage.childImageSharp.fluid.src
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

  return (
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
          <Content>
            <Description>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </Description>
            <Photos>
              <PhotoMain>
                <img src={srcImage} alt={data.mdx.frontmatter.title} />
              </PhotoMain>
              <PhotoGallery>
                {data.mdx.frontmatter.gallery.slice(0, 3).map(item => (
                  <div key={item.childImageSharp.fluid.originalName}>
                    <img
                      src={item.childImageSharp.fluid.src}
                      alt={item.childImageSharp.fluid.originalName}
                    />
                  </div>
                ))}
              </PhotoGallery>
            </Photos>
          </Content>
        </WrapperShort>
      </WrapperWide>
    </SinglePageTemplate>
  )
}

export default PostLayout
