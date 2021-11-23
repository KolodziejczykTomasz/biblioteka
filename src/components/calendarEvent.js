import React from "react"
import Calendar from "@ericz1803/react-google-calendar"
import styled from "styled-components"
const API_KEY = "YOUR_API_KEY"
let calendars = [
  { calendarId: "YOUR_CALENDAR_ID" },
  {
    calendarId: "YOUR_CALENDAR_ID_2",
    color: "#B241D1", //optional, specify color of calendar 2 events
  },
]



const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px 50px 60px 50px;
`

export const CalendarEvent = () => {
  return (
    <Wrapper>
      <Calendar apiKey={API_KEY} calendars={calendars} />
    </Wrapper>
  )
}


