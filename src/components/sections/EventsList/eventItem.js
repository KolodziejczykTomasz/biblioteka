import React from "react"

import styled from "styled-components"

const Subtitle = styled.div`
  width: 100%;
  height: 28px;
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
  :hover {
    color: #1b5fc6;
  }
`
const Title = styled.div`
  font-size: 20px;
  line-height: 23px;
  font-weight: 600;
  transition: 0.2s ease-in-out;
`
const Wrapper = styled.div`
  display: block;
  position: relative;
  width: 90%;
  min-height: 50px;
  height: auto;
  padding: 27px 30px 17px 70px;
  margin: 24px 0 24px -30px;
  background-color: #fff;
  color: black;
  cursor: pointer;
  border-radius: 20px 0px 20px 0px;
  :hover ${Subtitle} {
    color: #1b5fc6;
  }
  :hover ${Title} {
    color: #1b5fc6;
  }
  :focus {
    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  }
  ::before {
    content: "";
    width: 0;
    height: 0;
    border-top: 0 solid transparent;
    border-bottom: 26px solid transparent;
    border-right: 31px solid #d3d3d3;
    position: absolute;
    bottom: -26px;
    left: 0;
  }
`
const Date = styled.div`
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
`

export const EventItem = ({ title, start, desc }) => {
  const Days = [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota",
  ]
  const months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ]
  const Weekday = Days[start.getDay()]
  const day = start.getDate()
  const year = start.getFullYear()
  const hours = start.getHours()
  const minutes = start.getMinutes()
  //const Month = months[start.getMonth() - 1]
  const Month = months[start.getMonth()]
  const monthName = Month.toLocaleString("pl-pl", { month: "long" })

  return (
    <Wrapper>
      <Date>
        {day} {monthName} {year} - {Weekday}.{" "}
        <span style={{ fontWeight: 600, fontSize: "14px" }}>
          Początek spotkania o {hours}:{minutes}
        </span>
      </Date>
      <Title>{title}</Title>
      <Subtitle/>
    </Wrapper>
  )
}
