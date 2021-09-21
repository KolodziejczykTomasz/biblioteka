import * as React from "react"
import { VerticalMenu } from "../components/verticalMenu"

import "./index.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.6fr;
  height: 100vh;
  width: 100%;
  position: relative;
`

const IndexPage = () => (
  <Layout>    
    <Seo title="Home" />
    <Wrapper>
      <div>
        <VerticalMenu />
      </div>
      <div>
        <p>
          Biblioteka Publiczna Gminy Lidzbark Warmiński w Kraszewie
        </p>
      </div>
    </Wrapper>
  </Layout>
)

export default IndexPage
