import React from "react"
import { ClockIcon } from "./icon"
import styled from "styled-components"

const Title = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
  padding: 10px 0;
  :hover {
    color: #1b5fc6;
  }
`
const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 300px;
  background-color: grey;
  overflow: hidden;
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
  }
  ::after {
    content: "";
    width: 100%;
    height: 300px;
    position: absolute;
  }
  :hover:after {
    background-color: rgba(28, 71, 136, 0.3);
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 362px;
  border: 1px solid #c2c2c2;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  :hover {
    -webkit-box-shadow: 0px 0px 21px -4px rgba(194, 194, 194, 1);
    -moz-box-shadow: 0px 0px 21px -4px rgba(194, 194, 194, 1);
    box-shadow: 0px 0px 21px -4px rgba(194, 194, 194, 1);
  }
  :hover ${Title} {
    color: #1b5fc6;
  }
  :hover ${CardImage} {
    background-color: rgba(28, 71, 136, 0.6);
  }
`



const MetaWrapper = styled.div`
  padding: 19px 24px 5px 24px;
`

const DataPost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin-left: 5px;
  color: #c2c2c2;
`
const CategoryPost = styled.div`
  color: #c2c2c2;
  text-align: right;
  cursor: pointer;
  :hover {
    color: black;
  }
`

const MetaData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid #c2c2c2;
  padding: 10px 0;
`

export const NewsListItem = () => (
  <Wrapper>
    <CardImage>Photo</CardImage>
    <MetaWrapper>
      <Title>Ruszamy z wakacjami w Bibliotece w Kraszewie</Title>
      <MetaData>
        <DataPost>
          <ClockIcon />
          4.22.2021
        </DataPost>
        <CategoryPost>Aktualności</CategoryPost>
      </MetaData>
    </MetaWrapper>
  </Wrapper>
)
