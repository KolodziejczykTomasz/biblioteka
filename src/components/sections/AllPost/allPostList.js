import React from "react"
import { NewsListItem } from "../NewsList/newsListItem"

import styled from "styled-components"

const Wrapper = styled.div``

export const AllPostList = ({ data }) => {
  const {
    allMdx: { nodes },
  } = data

  return (
    <Wrapper>
      <div>Aktualności</div>
      <div>
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
          }) => (
            <NewsListItem
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
      </div>
    </Wrapper>
  )
}
