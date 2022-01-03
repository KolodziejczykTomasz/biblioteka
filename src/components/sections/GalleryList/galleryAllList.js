import React from "react"
import { Title } from "../../title"
import { GalleryAllListItem } from "./galleryAllListItem"

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

export const GalleryAllList = ({ data }) => {
  const {
    allMdx: { nodes },
  } = data
  return (
    <Section>
      <Wrapper>
        <Title>Galeria</Title>
        <WrapperCard>
          {nodes.map(
            ({
              frontmatter: {
                title,
                published,
                category,
                slug,
                author,
                featuredImage,
                publicURL,
              },
            }) => (
              <GalleryAllListItem
                key={slug}
                title={title}
                published={published}
                category={category}
                author={author}
                image={featuredImage}
                slug={slug}
                publicURL={publicURL}
              />
            )
          )}
        </WrapperCard>
      </Wrapper>
    </Section>
  )
}
