import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const Title = styled.div`
  display: block;
  display: -webkit-box;
  max-width: 100%;
  height: 48px;
  line-height: 1;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3.4em;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  width: 100%;
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
  height: 100%;
  max-height: 250px;
  background-color: grey;
  overflow: hidden;
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-content: flex-end;
  width: 100%;
  height: 100px;
  padding: 19px 24px 0 24px;
`

const BreakSection = styled.div`
  display: block;
  min-height: 10px;
  height: auto;
`

export const GalleryListItem = ({title, image, slug}) => {
  const srcImage = image.src
  return (
    <Wrapper as={Link} aria-label="Więcej" to={`/gallery/${slug}`}>
      <CardImage>
        <img src={srcImage} alt={title} />
      </CardImage>
      <BreakSection />
      <MetaWrapper>
        <Title>{title}</Title>
      </MetaWrapper>
    </Wrapper>
  )}
