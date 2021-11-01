import React from "react"
import { Title } from "./title"
import { GalleryListItem } from "./galleryListItem"
import { ButtonMore } from "../components/buttonMore"
import { RightIcon } from "../components/icon"

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
`

const WrapperCard = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
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

export const GalleryList = () => (
  <Section>
    <Wrapper>
      <Title>Galeria</Title>
      <WrapperCard>
        <GalleryListItem />
        <GalleryListItem />
        <GalleryListItem />
        <GalleryListItem />
        <GalleryListItem />
        <GalleryListItem />
        <GalleryListItem />
        <GalleryListItem />
      </WrapperCard>
      <WrapperButton>
        <ButtonMore>
          <ButtonText>
            Zobacz wszystkie
            <span>
              <RightIcon />
            </span>
          </ButtonText>
        </ButtonMore>
      </WrapperButton>
    </Wrapper>
  </Section>
)
