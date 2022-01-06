import React from "react"
import { SearchIcon } from "../components/icon"
import { Input } from "../components/input"
import { useFlexSearch } from "react-use-flexsearch"
import { graphql } from "gatsby"

import BIP_Icon from "../assets/images/BipIcon.png"
import FB_Icon from "../assets/images/FbIcon.png"

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  margin-right: 10px;
  @media (max-width: 440px) {
    flex-direction: column;
  }
  @media (max-width: 1100px) {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-right: 0;
    padding: 10px 5px;
  }
  & div:nth-child(2) {
    display: flex;
    justify-content: right;
    align-items: center;
    margin: 0 10px;
    position: relative;
    border-radius: 50px;
    cursor: pointer;
    color: rgb(27, 95, 198);
    transition: 0.2s;
  }
  & div:nth-child(3) {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    & img {
      display: grid;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      :hover {
        filter: grayscale(50%);
      }
      :focus {
        outline: rgb(27, 95, 198) solid 2px;
      }
    }
  }
`

const WrapperIcon = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 100%;
  border-radius: 0 25px 25px 0;
  :hover {
    background-color: rgb(27, 95, 198);
    color: white;
  }
`

const WrapperIconBip = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  & img {
    display: grid;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
      filter: grayscale(50%);
    }
    :focus {
      outline: rgb(27, 95, 198) solid 2px;
    }
  }
`

export const pageQuery = graphql`
  query {
    localSearchPages {
      index
      store
    }
    allMdx(sort: { fields: frontmatter___published }) {
      nodes {
        body
        slug
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`
export const SearchBar = () => {
  const { search } = window.location
  const query = new URLSearchParams(search).get("s")
  const [searchQuery, setSearchQuery] = React.useState(query || "")
  
 
  
  return (
    <form action="/search/" method="get" autoComplete="off">
      <Wrapper>
        <WrapperIconBip>
          <img src={BIP_Icon} alt="BIP logo" />
        </WrapperIconBip>
        <div>
          <WrapperIcon as="button" type="submit">
            <SearchIcon />
          </WrapperIcon>
          <Input
            placeholder="Szukaj..."
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            name="s"
          />
        </div>
        <div>
          <img src={FB_Icon} alt="Facebook logo" />
        </div>
      </Wrapper>
    </form>
  )
}

