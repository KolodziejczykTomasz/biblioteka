import React from "react"
import LogoPhoto from "../../assets/images/logo.jpg"

import styled from "styled-components"

const WrapperWide = styled.div`
  margin-top: 30px;
  width: 100%;
  background-color: #2a2a2a;
`

const WrapperShort = styled.div`
  display: block;
  width: 100%;
  max-width: 1290px;
  margin: 0 auto;  
  color: white;  
  @media (max-width: 320px) {
    margin: 0;
    padding: 0;
  }
  @media (min-width: 321px) {
    margin: 0;
    padding: 0;
  }
  @media (min-width: 720px) {
    margin: 0;
    padding: 0;
  }
  @media (min-width: 1024px) {
    margin: 0 auto;
    padding: 0 144px;
  }
  @media (min-width: 1536px) {
    margin: 0 144px;
    padding: 0 15px;
  }
`

const ContentContact = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px 10px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  column-gap: 15px;
  & div:nth-child(1) {
    text-align: center;
  }
  & div:nth-child(2) {
    text-align: left;
  }
  & div:nth-child(3) {
    text-align: left;
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    & div:nth-child(1) {
      text-align: center;
    }
    & div:nth-child(2) {
      text-align: center;
    }
    & div:nth-child(3) {
      text-align: center;
    }
  }
  @media (min-width: 321px) {
    grid-template-columns: repeat(1, 1fr);
    & div:nth-child(1) {
      text-align: center;
    }
    & div:nth-child(2) {
      text-align: center;
    }
    & div:nth-child(3) {
      text-align: center;
    }
  }
  @media (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
    & div:nth-child(1) {
      text-align: left;
    }
    & div:nth-child(2) {
      text-align: left;
    }
    & div:nth-child(3) {
      text-align: left;
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1536px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ContentCopyright = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px 10px;
  color: #6e6d76;
  background-color: #fff;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    color: #1b5fc6;
  }
  & div:nth-child(1) {
    text-align: left;
  }
  & div:nth-child(2) {
    text-align: center;
  }
  & div:nth-child(3) {
    text-align: right;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    width: 100%;
    & div:nth-child(1) {
      text-align: center;
    }
    & div:nth-child(2) {
      text-align: center;
    }
    & div:nth-child(3) {
      text-align: center;
    }
  }
`

const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 200px;
  border: 3px solid #c2c2c2;
  background-color: #fff;
  overflow: hidden;
`

const Title = styled.div`
  display: grid;
  padding: 10px 0;
  font-size: 14px;
  line-height: 17px;
  color: #6e6d76;
  justify-content: left;
  text-transform: uppercase;
  @media (max-width: 320px) {
    justify-content: center;
  }
  @media (min-width: 321px) {
    justify-content: center;
  }
  @media (min-width: 720px) {
    justify-content: left;
  }
`

const Content = styled.div`
  margin: 20px 0;
  & ul {
    & li {
      list-style: none;
    }
  }
`

export const Footer = () => (
  <WrapperWide id="contact">
    <WrapperShort>
      <ContentContact>
        <WrapperLogo>
          <Logo>
            <img src={LogoPhoto} alt="Logo biblioteki" />
          </Logo>
        </WrapperLogo>
        <div>
          <Title>Adres</Title>
          <div> Kraszewo 8, 11-100 Lidzbark Warmiński</div>
          <Content>
            <Title>Godziny otwarcia</Title>
            <ul>
              <li>poniedziałek - 10.00 - 18.00</li>
              <li>wtorek - 10.00 - 18.00</li>
              <li>środa - 10.00 - 18.00</li>
              <li>czwartek - 10.00 - 16.00</li>
              <li>piątek - 10.00 - 18.00</li>
              <li>sobota - NIECZYNNE</li>
            </ul>
          </Content>
          <Content>
            Codziennie od 13.00 do 14.00 obowiązuje przerwa na dezynfekcję
            pomieszczeń, wówczas biblioteka jest NIECZYNNA.
          </Content>
        </div>
        <div>
          <Title>Kontakt</Title> <div>tel.: 89 766 32 05 </div>
          <div>e-mail: poczta@biblioteka-kraszewo.pl</div>
        </div>
      </ContentContact>
    </WrapperShort>
    <ContentCopyright>
      <div>Biblioteka Publiczna Gminy Lidzbark Warmiński w Kraszewie</div>
      <div>Copyright © {new Date().getFullYear()}</div>
      <div>
        Realizacja
        <span
          style={{
            color: "rgb(27, 95, 198)",
            fontWeight: 600,
            marginLeft: "10px",
          }}
        >
          NETTOM
        </span>
      </div>
    </ContentCopyright>
  </WrapperWide>
)
