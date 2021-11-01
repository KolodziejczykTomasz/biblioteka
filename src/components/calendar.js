import React from "react"
import { Title } from "../components/title"
import { Subtitle } from "../components/subtitle"
import { EventItem } from "../components/eventItem"
import styled from "styled-components"

const WrapperWide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #2a2a2a;
`

const WrapperShort = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 90%;
  max-width: 1290px;
  margin: 0 144px 50px 144px;
  padding: 0 15px;
  color: white;
`

const ColLeft = styled.div`
 
  background-color: rgb(27, 95, 198);
`

const ColRight = styled.div`
 
  color: black;
  background-color: white;
`

const EventsList = styled.div`

`

export const Calendar = () => (
  <WrapperWide>
    <Title style={{ color: "white"}}>Kalendarium wydarzeń</Title>
    <WrapperShort>
      <ColLeft>
        <Subtitle>Wydarzenie przeszłe </Subtitle>
        <EventsList>
          <EventItem />
          <EventItem />
          <EventItem />
        </EventsList>
      </ColLeft>
      <ColRight>right</ColRight>
    </WrapperShort>
  </WrapperWide>
)
