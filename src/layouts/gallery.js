import React from "react"
import { graphql, Link } from "gatsby"
import { VerticalLine } from "../components/icons/"
import { ButtonBack } from "../components/buttonBack"
import { LeftIcon } from "../components/icon"
import { GatsbyImage } from "gatsby-plugin-image"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
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
          publicURL
          childImageSharp {
            gatsbyImageData(
              height: 600
              width: 900
              transformOptions: { fit: COVER }
              placeholder: BLURRED
              webpOptions: { quality: 50 }
            )

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

const WrapperGallery = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5px;
  row-gap: 10px;
  margin-top: 30px;
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 10px;
  }
  @media (min-width: 481px) and (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 10px;
    place-items: center;
  }
  @media (min-width: 661px) and (max-width: 766px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
  }
  @media (min-width: 767px) and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    width: 80%;
    place-items: center;
  }
  @media (min-width: 961px) and (max-width: 1025px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    place-items: center;
    margin-right: 40px;
  }
  @media (min-width: 1026px) and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    place-items: center;
    margin-right: 100px;
  }
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
          <SimpleReactLightbox>
            <SRLWrapper>
              <WrapperGallery>
                {data.mdx.frontmatter.gallery.map(item => (
                  <a href={item.publicURL}>
                    <WrapperPhoto key={item.childImageSharp.fluid.originalName}>
                      <GatsbyImage
                        image={item.childImageSharp.gatsbyImageData}
                        alt={item.childImageSharp.fluid.originalName}
                      />
                    </WrapperPhoto>
                  </a>
                ))}
              </WrapperGallery>
            </SRLWrapper>
          </SimpleReactLightbox>
          <Footer>
            <WrapperButton>
              <ButtonBack>
                <ButtonText as={Link} aria-label="Powrót" to="/">
                  <span>
                    <LeftIcon />
                  </span>
                  Powrót
                </ButtonText>
              </ButtonBack>
            </WrapperButton>
          </Footer>
        </WrapperShort>
      </WrapperWide>
    </SinglePageTemplate>
  )
}

export default GalleryLayout
