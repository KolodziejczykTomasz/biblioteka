import React from "react"
import { SearchIcon } from "../icon"
import { Input } from "../input"
import Logo from "../../assets/images/logo.jpg"
import BIP_Icon from "../../assets/images/BipIcon.png"
import FB_Icon from "../../assets/images/FbIcon.png"

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 340px) {
    display: flex;
    min-width: 340px;
    height: auto;
  }
  @media (max-width: 680px) {
    display: block;
    height: auto;
  }
`

const RowLogo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 1212px;
  min-height: 120px;
  height: auto;
  @media (max-width: 340px) {
    display: grid;
    min-width: 340px;
  }
  @media (max-width: 1100px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr;
    width: 100%;
  }
  @media (min-width: 1101px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1212px;
    height: 120px;
  }
`

const ColumnLogo = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1101px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    justify-content: center;
    align-items: center;
  }
  & div:nth-child(1) {
    display: grid;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    width: 100px;
    height: 100px;
    border: 1px solid ${({ theme }) => theme.colors.darkPurple};
    border-radius: 50%;
    transition: ease-in 0.2s;
    overflow: hidden;
    @media (max-width: 1100px) {
      display: none;
    }
  }
  :hover {
    border: 2px solid rgb(27, 95, 198);
  }
  & img {
    display: grid;
    justify-content: center;
    align-items: center;
  }

  & div:nth-child(2) {
    display: flex;
    width: 80%;
    font-size: 24px;
    line-height: 29px;
    font-weight: 600;
    transition: ease-in 0.2s;
    cursor: pointer;
    @media (max-width: 1100px) {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-wrap: wrap;
      width: 100%;
      min-height: 100px;
      height: auto;
    }
    @media (min-width: 1101px) {
      display: flex;
      width: 80%;
      font-size: 24px;
      line-height: 29px;
      font-weight: 600;
    }
    :hover {
      color: rgb(27, 95, 198);
    }
  }
`

const ColumnSearch = styled.div`
  display: flex;
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

export const Header = () => (
  <Wrapper>
    <div>
      <RowLogo>
        <ColumnLogo>
          <div>
            <img src={Logo} alt="Logo biblioteki" />
          </div>
          <div>Biblioteka Publiczna Gminy Lidzbark Warmiński w Kraszewie</div>
        </ColumnLogo>
        <ColumnSearch>
          <WrapperIconBip>
            <img src={BIP_Icon} alt="BIP logo" />
          </WrapperIconBip>
          <div>
            <WrapperIcon>
              <SearchIcon />
            </WrapperIcon>
            <Input placeholder="Szukaj..." />
          </div>
          <div>
            <img src={FB_Icon} alt="Facebook logo" />
          </div>
        </ColumnSearch>
      </RowLogo>
    </div>
  </Wrapper>
)
