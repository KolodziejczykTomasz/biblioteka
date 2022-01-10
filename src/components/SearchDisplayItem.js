import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { Button } from "../components/button"

import styled from "styled-components"

const Title = styled.div`
  margin: 10px 0;
  font-size: 20px;
  font-weight: 600;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100px;
  height: auto;
  border: 1px solid #c2c2c2;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  color: black;
  padding: 0 10px;
  :hover {
    -moz-box-shadow: 2px 2px 6px 0 #444;
    -webkit-box-shadow: 2px 2px 6px 0 #444;
    box-shadow: 2px 2px 6px 0 #444;
  }
  :hover ${Title} {
    color: #1b5fc6;
  }
  margin: 50px 0;
`

const Main = styled.div``
const Footer = styled.div`
  margin: 20px 0;
  justify-content: right;
  padding-right: 20px;
`

export const SearchDisplayItem = ({ body, title, slug }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Main>
      <MDXRenderer>
        {body}        
      </MDXRenderer>
    </Main>
    <Footer>
      <Button as={Link} to={`/${slug}`}>
        Przejdź
      </Button>
    </Footer>
  </Wrapper>
)
