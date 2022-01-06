import React from "react"
import { Link } from "gatsby"
import { SearchBar } from "../SearchBar"

import Logo from "../../assets/images/logo.jpg"

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
`

export const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <Wrapper>
      <div>
        <RowLogo>
          <ColumnLogo as={Link} aria-label="Strona główna" to="/">
            <div>
              <img src={Logo} alt="Logo biblioteki" />
            </div>
            <div>Biblioteka Publiczna Gminy Lidzbark Warmiński w Kraszewie</div>
          </ColumnLogo>
          <ColumnSearch>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </ColumnSearch>
        </RowLogo>
      </div>
    </Wrapper>
  )
}
