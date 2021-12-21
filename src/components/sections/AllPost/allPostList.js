import React from "react"
import { AllPostListItem } from "../AllPost/allPostListItem"

import styled from "styled-components"

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

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 42px;
  font-weight: 700;
  padding: 30px 0;
`

export const AllPostList = ({ data }) => {
  const {
    allMdx: { nodes },
  } = data

  return (
    <WrapperWide>
      <WrapperShort>
        <Header>Aktualności</Header>
        {nodes.map(
          ({
            frontmatter: {
              title,
              published,
              category,
              slug,
              author,

              featuredImage,
            },
            body,
          }) => (
            <AllPostListItem
              key={slug}
              title={title}
              published={published}
              category={category}
              author={author}
              image={featuredImage.childImageSharp.fluid}
              slug={slug}
              body={body}
            />
          )
        )}
      </WrapperShort>
    </WrapperWide>
  )
}
