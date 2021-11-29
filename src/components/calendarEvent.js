import React from "react"
import { terminarz as myEventsList } from "../data/terminarz"
import { Calendar, momentLocalizer } from "react-big-calendar"

import moment from "moment"
import "moment/locale/pl"
import "react-big-calendar/lib/css/react-big-calendar.css"

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 50px 60px 50px;
`

const WrapperSelected = styled.div`
  padding: 30px 15px;
  width: 100%;
  height: 24px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
`

const localizer = momentLocalizer(moment)

export const CalendarEvent = () => {
  const [selected, setSelected] = React.useState()

  const handleSelectSlot = ({ title }) => {
    setSelected(title)
    return
  }

  const resetSelectSlot = () => {
    setSelected("")
    return
  }

  return (
    <Wrapper>
      <div>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          messages={{
            next: "Dalej",
            previous: "Wstecz",
            today: "Dzisiaj",
            month: "Мiesiąc",
            week: "Tydzień",
            day: "Dzien",
            work_week: "Roboczy tydzień",
            allDay: "Cały dzień",
            yesterday: "Wczoraj",
            tomorrow: "Jutro",
            noEventsInRange: "Nie dodano wydarzeń",
            showMore: function showMore(total) {
              return "+" + total + "więcej"
            },
          }}
          onSelectEvent={handleSelectSlot}
          onView={resetSelectSlot}
        />
      </div>
      {selected ? (
        <WrapperSelected>
          <span style={{ fontWeight: 600 }}>Nazwa wydarzenia:</span> {selected}
        </WrapperSelected>
      ) : (
        <WrapperSelected />
      )}
    </Wrapper>
  )
}
