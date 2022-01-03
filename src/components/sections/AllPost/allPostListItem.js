import React from "react"
import { Link } from "gatsby"
import { VerticalLine } from "../../icons"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ButtonBack } from "../../buttonBack"
import { RightIcon } from "../../icon"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import styled from "styled-components"

const Title = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  font-size: 32px;
  font-weight: 700;
  min-height: 70px;
  height: auto;
  padding-bottom: 10px;
  border-bottom: 1px solid grey;
`

const CardImage = styled.div``

const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 766px) {
    flex-direction: column;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 362px;
  height: auto;
  border: 1px solid #c2c2c2;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  margin: 10px 0;
  :hover {
    -moz-box-shadow: 2px 2px 6px 0 #444;
    -webkit-box-shadow: 2px 2px 6px 0 #444;
    box-shadow: 2px 2px 6px 0 #444;
  }
  :hover ${Title} {
    color: #1b5fc6;
  }
`
const WrapperPublished = styled.div`
  display: flex;
  width: 150px;
  padding-top: 19px;
`

const WrapperPublishedRedBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: red;
  color: white;
  width: 90px;
  height: 90px;
  margin-left: 5px;
  & span {
    font-size: 32px;
    font-weight: 600;
  }
`

const WrapperPhoto = styled.div`
  display: flex;
  width: 400px;
  padding-top: 19px;
  @media (max-width: 766px) {
    width: 100%;
    padding: 0 5px;
    justify-content: center;
    align-items: center;
  }
  & img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
`
const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const WrapperMeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-content: flex-end;
  width: 100%;
  min-height: 130px;
  height: auto;
  padding: 19px 24px 0 24px;
  overflow: hidden;
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

const Description = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  color: black;
  padding: 20px 20px;
  font-size: 18px;
  & ul {
    padding-left: 15px;
  }
`

const Footer = styled.div`
display: flex:
height: 50px;
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

export const AllPostListItem = ({
  title,
  author,
  published,
  category,
  image,
  slug,
  body,
}) => {
  const imagesrc = getImage(image)
  const start = published

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
    <Wrapper>
      <Row>
        <WrapperPublished>
          <WrapperPublishedRedBox>
            <div>
              <span>{day} </span>
            </div>
            <div>
              {Month}.{year}r.
            </div>
          </WrapperPublishedRedBox>
        </WrapperPublished>
        <WrapperPhoto>
          <CardImage>         
              <GatsbyImage image={imagesrc} alt={title} />           
          </CardImage>
        </WrapperPhoto>
        <WrapperContent>
          <WrapperMeta>
            <Title>{title}</Title>
            <Meta>
              <Author>{author}</Author>
              <VerticalLine />
              <Published>
                {day} {mName} {year}r.
              </Published>
              <VerticalLine />
              <Category>{category}</Category>
            </Meta>
          </WrapperMeta>
          <Description>
            <MDXRenderer>{body}</MDXRenderer>
          </Description>
        </WrapperContent>
      </Row>
      <Footer>
        <WrapperButton>
          <ButtonBack>
            <ButtonText as={Link} aria-label="Więcej" to={`/${slug}`}>
              Zobacz więcej
              <span>
                <RightIcon />
              </span>
            </ButtonText>
          </ButtonBack>
        </WrapperButton>
      </Footer>
    </Wrapper>
  )
}
