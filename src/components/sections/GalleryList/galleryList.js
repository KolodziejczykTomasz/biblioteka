import React from "react"
import { Link } from "gatsby"
import { Title } from "../../title"
import { GalleryListItem } from "./galleryListItem"
import { ButtonMore } from "../../buttonMore"
import { RightIcon } from "../../icon"

import styled from "styled-components"

const Section = styled.div`
  width: 100%;
  height: auto;
`
const Wrapper = styled.div`
  display: flex;
  margin: 0 144px;
  padding: 0 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 320px) {
    margin: 0 5px;
    padding: 0;
  }
  @media (min-width: 321px) {
    margin: 0 60px;
    padding: 0;
  }
  @media (min-width: 720px) {
    margin: 0 100px;
    padding: 0;
  }
  @media (min-width: 1024px) {
    margin: 0 100px;
    padding: 0 15px;
  }
  @media (min-width: 1536px) {
    margin: 0 144px;
    padding: 0 15px;
  }
`

const WrapperCard = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 321px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1536px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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

export const GalleryList = ({ data }) => {
    const {
      allMdx: { nodes },
    } = data
  return (
    <Section>
      <Wrapper>
        <Title>Galeria</Title>
        <WrapperCard>
          {nodes
            .sort(() => 0.5 - Math.random())
            .slice(0, 8)
            .map(
              ({
                frontmatter: {
                  title,
                  published,
                  category,
                  slug,
                  author,
                  featuredImage,
                },
              }) => (
                <GalleryListItem
                  key={slug}
                  title={title}
                  published={published}
                  category={category}
                  author={author}
                  image={featuredImage.childImageSharp.fluid}
                  slug={slug}
                />
              )
            )}
        </WrapperCard>
        <WrapperButton>
          <ButtonMore>
            <ButtonText as={Link} aria-label="wszystkie galerie" to="/">
              Zobacz wszystkie
              <span>
                <RightIcon />
              </span>
            </ButtonText>
          </ButtonMore>
        </WrapperButton>
      </Wrapper>
    </Section>
  )}
