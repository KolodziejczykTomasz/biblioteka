import React from "react"
import { Title } from "./title"
import { Subtitle } from "./subtitle"
import { EventItem } from "./eventItem"
import { CalendarEvent } from "./calendarEvent"
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
const WrapperEventsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const ColRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: white;
  padding: 10px 10px;
`

export const EventsList = () => (
  <WrapperWide>
    <Title style={{ color: "white" }}>Kalendarium wydarzeń</Title>
    <WrapperShort>
      <ColLeft>
        <Subtitle>Wydarzenie przeszłe </Subtitle>
        <WrapperEventsList>
          <EventItem />
          <EventItem />
          <EventItem />
        </WrapperEventsList>
      </ColLeft>
      <ColRight>
        <Subtitle>Terminarz</Subtitle>
        <CalendarEvent />
      </ColRight>
    </WrapperShort>
  </WrapperWide>
)