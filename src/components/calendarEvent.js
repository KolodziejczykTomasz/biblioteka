import React from "react"
import Calendar from "react-awesome-calendar"

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px 50px 60px 50px;
`
const events = [
  {
    id: 1,
    color: "#fd3153",
    from: "2019-05-02T18:00:00+00:00",
    to: "2019-05-05T19:00:00+00:00",
    title: "This is an event",
  },
  {
    id: 2,
    color: "#1ccb9e",
    from: "2021-05-01T13:00:00+00:00",
    to: "2021-05-05T14:00:00+00:00",
    title: "This is another event",
  },
  {
    id: 3,
    color: "#3694DF",
    from: "2021-05-05T13:00:00+00:00",
    to: "2021-05-05T20:00:00+00:00",
    title: "This is also another event",
  },
]

export const CalendarEvent = () => {
  return (
    <Wrapper>
      <Calendar events={events} />
    </Wrapper>
  )
}
