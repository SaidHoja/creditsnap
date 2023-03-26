"use client";
import { Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Tooltip} from "@chakra-ui/react";
import React, { useState, createContext, useContext, useEffect } from "react";

export default function ShowTooltipSlider(props) {
  const [value, setValue] = useState(5)
  const [showTooltip, setShowTooltip] = useState(false)

  const handleChange=(v) => {
    props.onCreditData(v)
  }
    return (
        <>
          <Slider
                  id="slider"
                  defaultValue={5}
                  min={0}
                  max={100}
                  colorScheme="teal"
                  onChange={(v) => {
                    setValue(v)
                    handleChange(v)
                  }}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
                    25%
                  </SliderMark>
                  <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
                    50%
                  </SliderMark>
                  <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
                    75%
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <Tooltip
                    hasArrow
                    bg="teal.500"
                    color="white"
                    placement="top"
                    isOpen={showTooltip}
                    label={`${value}%`}
                  >
                    <SliderThumb />
                  </Tooltip>
                </Slider>
        </>
    )
}