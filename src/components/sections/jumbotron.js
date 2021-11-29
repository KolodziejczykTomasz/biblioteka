import React from "react"
import JumbotronImage from "../../assets/images/jubotron.jpg"
import { Button } from "../button"
import { RightIcon } from "../icon"

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  text-align: center;
  overflow: hidden;
  & img {
      position: relative;
  }
`

const WrapperDescription = styled.div`
position: absolute;
`

const Title = styled.div`
  font-size: 40px;
  line-height: 44px;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
`
const Subtitle = styled.div`
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  margin-bottom:32px;
  color: white;
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

export const Jumbotron = () => (
  <Wrapper>
    <img src={JumbotronImage} alt="Tło sekcji" />
    <WrapperDescription>
      <Title>Aktualne Godziny Otwarcia Bibliotek</Title>
      <Subtitle>Aktualizacja od 1.11.2021r.</Subtitle>
      <div>
        <Button>
          <ButtonText>
            zobacz więcej
            <span>
              <RightIcon />
            </span>
          </ButtonText>
        </Button>
      </div>
    </WrapperDescription>
  </Wrapper>
)
