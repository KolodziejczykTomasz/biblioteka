import React from "react"

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`

const NavItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 88px;
  margin: 0 10px;
  padding: 0 20px;
  text-transform: uppercase;
  color: black;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  background-color: rgb(238, 238, 238);
  transition: ease-in 0.2s;
  cursor: pointer;
  border-radius: 4px;

  @media (max-width: 480px) {
  }
  @media (min-width: 481px) and (max-width: 766px) {
  }
  @media (min-width: 767px) and (max-width: 960px) {
    width: 120px;
    margin: 0 5px;
    padding: 0 5px;
  }
  @media (min-width: 961px) and (max-width: 1025px) {
    width: 130px;
    margin: 0 5px;
    padding: 0 10px;
  }

  @media (min-width: 1026px) and (max-width: 1280px) {
    width: 170px;
    margin: 0 10px;
    padding: 0 20px;
  }

  & p {
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  :hover {
    color: white;
    background-color: rgb(27, 95, 198);
  }
`
const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5px;
  column-gap: 5px;
  row-gap: 5px;
  width: 100%;
  @media (min-width: 680px) {
    flex-direction: row;
  }
`

const Navi = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  transition: transform ease-in-out 0.3s;
  & a {
    color: white;
    text-decoration: none;
  }
  @media (max-width: 680px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    height: auto;
  }
  & {
    div {
      display: flex;
      width: 33.33%;
      height: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 0 5px;
      cursor: pointer;
      @media (max-width: 768px) {
        padding: 20px 0;
      }
      :hover {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #c77b0a;
        height: 100%;
        width: 33.33%;
        @media (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }
`
const MenuToggleButton = styled.button`
  width: 40px;
  height: 40px;
  z-index: 9999;
  position: absolute;
  top: 200px;
  left: 20px;
  overflow: hidden;
  background-color: white;
  border: 1.5px solid #1b5fc6;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

  @media (min-width: 680px) {
    display: none;
  }

  @media (max-width: 680px) {
    display: block;
    left: 0;
    border-left: ${({ isOpen }) => (isOpen ? "" : "none")};
    transition: transform 0.3s ease-in-out;
    transform: translateX(${({ isOpen }) => (isOpen ? "100%" : "0")});
  }

  span:first-child {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(
      ${({ isOpen }) => (isOpen ? "calc(-100% - 2px)" : 0)}
    );
    transition: transform ease-in-out 0.3s;

    &::before,
    &::after {
      position: absolute;
      content: "";
      width: 17px;
      height: 3px;
      background-color: #1b5fc6;
      left: 50%;
    }

    &::before {
      top: 13px;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      bottom: 13px;
      transform: translate(-50%, 50%) rotate(-45deg);
    }
  }

  span:last-child {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: calc(100% + 2px);
    transform: translateX(
      ${({ isOpen }) => (isOpen ? "calc(-100% - 2px)" : 0)}
    );
    transition: transform ease-in-out 0.3s;

    &::before,
    &::after {
      position: absolute;
      content: "";
      width: 25px;
      height: 3px;
      background-color: #1b5fc6;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`

export const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Wrapper>
      <MenuToggleButton
        isOpen={isOpen}
        onClick={() => setIsOpen(prevState => !prevState)}
      >
        <span />
        <span />
      </MenuToggleButton>
      <Navi isOpen={isOpen}>
        <NavList>
          <NavItem>Aktualności</NavItem>
          <NavItem>O nas</NavItem>
          <NavItem>Filie</NavItem>
          <NavItem>Galeria</NavItem>
          <NavItem>
            <p>Deklaracja dostępności</p>
          </NavItem>
        </NavList>
      </Navi>
    </Wrapper>
  )
}
