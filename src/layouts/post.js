import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"
import { VerticalLine } from "../components/icons/"
import { ButtonBack } from "../components/buttonBack"
import { LeftIcon } from "../components/icon"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import SinglePageTemplate from "../templates/SinglePageTemplate"

import styled from "styled-components"

export const query = graphql`
  query querySingleArticle($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        author
        category
        published
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)           
          }
        }
        gallery {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
            resize {
              aspectRatio
            }
            fluid {
              srcSet
              src
              tracedSVG
              originalName
            }
          }
        }
      }
      body
      excerpt(pruneLength: 200)
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
  @media (max-width: 480px) {
    margin: 0 5px;
  }
  @media (min-width: 481px) and (max-width: 766px) {
    margin: 0 10px;
  }
  @media (min-width: 767px) and (max-width: 960px) {
    margin: 0 25px;
  }
  @media (min-width: 961px) and (max-width: 1025px) {
    margin: 0 50px;
  }
  @media (min-width: 1026px) and (max-width: 1280px) {
    margin: 0 144px;
  }
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

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 18px;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 481px) and (max-width: 766px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 767px) and (max-width: 960px) {
  }
  @media (min-width: 961px) and (max-width: 1025px) {
  }
  @media (min-width: 1026px) and (max-width: 1280px) {
  }
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
  row-gap: 2px;
`

const PhotoMain = styled.div`
  display: grid;
  padding-bottom: 2px;
  max-height: 350px;
  overflow: hidden;
  row-gap: 2px;
  & img {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 350px;
    object-fit: cover;
  }
`

const PhotoGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2px;
  width: 100%;
  height: 150px;
  & img {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 150px;
    object-fit: cover;
  }
`

const Footer = styled.div`
display: flex:
height: 50px;
width: 100%;
`
const WrapperButton = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  padding-right: 15px;
`

const ButtonText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & span {
    margin-left: 10px;
    margin-bottom: -4px;
  }
`

const PostLayout = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.featuredImage)
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
                <GatsbyImage image={image} alt={data.mdx.frontmatter.title} />
              </PhotoMain>
              <SimpleReactLightbox>
                <SRLWrapper>
                  <PhotoGallery>
                    {data.mdx.frontmatter.gallery.slice(0, 3).map(item => (
                      <div key={item.childImageSharp.fluid.originalName}>
                        <GatsbyImage
                          image={item.childImageSharp.gatsbyImageData}
                          alt={item.childImageSharp.fluid.originalName}
                        />
                      </div>
                    ))}
                  </PhotoGallery>
                </SRLWrapper>
              </SimpleReactLightbox>
            </Photos>
          </Content>
          <Footer>
            <WrapperButton>
              <ButtonBack>
                <ButtonText as={Link} aria-label="Wstecz" to="/">
                  <span>
                    <LeftIcon />
                  </span>
                  Wstecz
                </ButtonText>
              </ButtonBack>
            </WrapperButton>
          </Footer>
        </WrapperShort>
      </WrapperWide>
    </SinglePageTemplate>
  )
}

export default PostLayout
