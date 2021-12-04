import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"


import styled from "styled-components"

const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;
  height: 90%;
  padding-bottom: 75px;
  
`

const Section = styled.div`
  display: flex;
  flex-direction: row;
  
  @media (max-width: 920px) {
      flex-direction: column;
  }
`
const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 40%;
`
const Photo = styled(Image)`
  display: block;
  width: 75%;
  margin: 0 auto;
  -moz-box-shadow: 1px 1px 1px 0px #444;
  -webkit-box-shadow: 1px 1px 1px 0px #444;
  box-shadow: 1px 1px 1px 0px #444;
  color: black;
  text-decoration: none;
  :hover {
    -moz-box-shadow: 1px 1px 3px 0px #444;
    -webkit-box-shadow: 1px 1px 3px 0px #444;
    box-shadow: 1px 1px 3px 0px #444;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 60%;
  position: relative;
 

  @media (max-width: 920px) {
      width: 100%;
    padding: 0 30px;
  }
`
const ContentHeader = styled.div`
  display: flex;
  margin: 40px 20px 0 40px;
  position: absolute;
  bottom: 0;
  width: 90%;
  height: auto;
  align-content: center;
`
const Published = styled.div`
  display: block;
  width: 50%;
  border-top: 1px solid #444;
  font-size: 14px;
`
const Author = styled.div`
  display: block;
  width: 50%;
  border-top: 1px solid #444;
  font-size: 14px;
`

const Description = styled.div`
  padding: 30px 20px 30px 40px;
  font-size: 18px;
  line-height: 32px;
  width: 100%;

  @media (max-width: 920px) {
      width: 100%;
    padding: 30px 5px;
  }
`

const ButtonMore = styled.div`
  display: block;
  padding: 10px 15px;
  color: #fff;
  background-color: rgb(236, 0, 0);
  border: none;
  margin-right: 0;
  margin-bottom: 70px;
  width: 150px;
  text-decoration: none;
  float: right;
  text-align: center;
  border: 1px solid transparent;
  & :hover {
    border: 1px solid rgb(236, 0, 0);
    color: rgb(236, 0, 0);
    background-color: #fff;
    text-decoration: none;
  }
`
const ButtonWrapper = styled.div`
  width: 100%;
  height: 80px;
  padding-bottom: 50px;
  background-color: ${({ activecolor }) =>
    activecolor ? "yellow" : "transparent"};
`

e
const PostLayout = ({ data }) => {
  return (
    <>
      <StyledWrapper>
       
      </StyledWrapper>
    </>
  )
}

export default PostLayout
