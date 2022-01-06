import * as React from "react"
//import { useFlexSearch } from "react-use-flexsearch"
import { graphql } from "gatsby"
import { SearchDisplayItem } from "../components/SearchDisplayItem"
import SinglePageTemplate from "../templates/SinglePageTemplate"
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

const SearchPage = ({ data }) => {
  const {
    allMdx: { nodes },
    localSearchPages: { index, store },
  } = data

   const { search } = window.location
   const query = new URLSearchParams(search).get("s")
   const [searchQuery] = React.useState(query || "")

 

  const posts = nodes
  const filterPosts = (posts, query) => {
    if (!query) {
      return posts
    }

    return posts.filter(({ frontmatter: { title } }) => {
      const postName = title.toLowerCase()
      return postName.includes(query)
    })
  }

  const filteredPosts = filterPosts(posts, searchQuery)
  return (
    <SinglePageTemplate>
      <WrapperWide>
        <WrapperShort>
          <Title>Wyniki wyszukiwania</Title>

          {searchQuery ? (
            <ul>
              {filteredPosts.map(
                ({ frontmatter: { title, slug }, body }) => (
                  <SearchDisplayItem
                    key={slug}
                    title={title}
                    slug={slug}
                    body={body}
                  />
                )
              )}
            </ul>
          ) : null}
        </WrapperShort>
      </WrapperWide>
    </SinglePageTemplate>
  )
}
export const pageQuery = graphql`
  query {
    localSearchPages {
      index
      store
    }
    allMdx(sort: { fields: frontmatter___published, order: DESC }) {
      nodes {
        frontmatter {
          title
          altText
          author
          category
          published
          slug
        }
        body
      }
    }
  }
`
export default SearchPage
