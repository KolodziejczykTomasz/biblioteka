import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import styled from "styled-components"

const Wrapper = styled.div`
border: 1px solid white;
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Wrapper>      
      <p>Biblioteka Publiczna Gminy Lidzbark Warmiński w Kraszewie</p>
    </Wrapper>
  </Layout>
)

export default IndexPage
