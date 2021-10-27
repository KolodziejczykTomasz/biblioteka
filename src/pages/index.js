import * as React from "react"
import { HeroSlider } from "../components/heroSlider"
import { Footer } from "../components/footer"
import Layout from "../components/layout"
import Seo from "../components/seo"

import styled from "styled-components"
import Navigation from "../components/navigation"

const Wrapper = styled.div``

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Wrapper>
      <Navigation/>
      <HeroSlider />
      <p> Biblioteka Publiczna Gminy Lidzbark Warmiński w Kraszewie</p>
      <Footer/>
    </Wrapper>
  </Layout>
)

export default IndexPage
