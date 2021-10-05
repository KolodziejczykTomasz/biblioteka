import React from "react"
import { Carousel, Radio } from "antd"

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
}

export const HeroSlider = () => {
  const [dotPosition] = React.useState("right")

  return (
    <>
      <Carousel dotPosition={dotPosition} autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  )
}
