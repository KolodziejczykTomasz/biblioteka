import * as React from "react"
import { Header } from "../components/sections/header"
import { Jumbotron } from "../components/sections/jumbotron"
import { NewsList } from "../components/sections/newsList"
import { EventsList } from "../components/sections/eventsList"
import { GalleryList } from "../components/sections/galleryList"
import { Footer } from "../components/sections/footer"
import Layout from "../components/layout"
import Seo from "../components/seo"

import styled from "styled-components"

const Wrapper = styled.div``

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Wrapper>
      <Header />
      <Jumbotron />
      <NewsList />
      <EventsList />
      <GalleryList />
      <Footer />
    </Wrapper>
  </Layout>
)

export default IndexPage
