import React from "react"
import { terminarz as lastEvents } from "../../../data/terminarz"
import { Title } from "../../title"
import { Subtitle } from "../../subtitle"
import { EventItem } from "./eventItem"
import { CalendarEvent } from "./calendarEvent"

import styled from "styled-components"

const WrapperWide = styled.div`
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
  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
    padding: 0 15px;
  }
  @media (min-width: 961px) {
    grid-template-columns: 1fr 1fr;
    max-width: 1290px;
    margin: 0 144px 50px 144px;
    padding: 0 15px;
  }
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
  width: 100%;
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
        <Subtitle style={{ fontWeight: 700 }}>Wydarzenia przeszłe </Subtitle>
        <WrapperEventsList>
          {lastEvents.slice(0, 4).map(({ id, title, desc, start }) => (
            <EventItem key={id} title={title} desc={desc} start={start} />
          ))}
        </WrapperEventsList>
      </ColLeft>
      <ColRight>
        <Subtitle style={{ fontWeight: 700 }}>Terminarz</Subtitle>
        <CalendarEvent />
      </ColRight>
    </WrapperShort>
  </WrapperWide>
)
