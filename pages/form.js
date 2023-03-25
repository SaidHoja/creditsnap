'use client'
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Stack,
    StackDivider,
    Box,
    Heading,
    Input,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Tooltip,
    Center,
  } from '@chakra-ui/react'
  import Link from 'next/link';
  import React, { useState, createContext, useContext, useEffect } from 'react';

export default function form({props}) {
    const [firstNameValue, setFirstNameValue] = useState('')
    const [lastNameValue, setLastNameValue] = useState('')
    const [creditHistoryValue, setCreditHistoryValue] = useState('')

    const handleFirstNameChange = (event) => setFirstNameValue(event.target.value)
    const handleLastNameChange = (event) => setLastNameValue(event.target.value)
    const handleCreditHistoryValue = (event) => setCreditHistoryValue(event.target.value)

    return (
        <>
            <h1>For the Following Questions, please refer to data from the past 7 years</h1>
            <Card align='center' maxWidth='50%'>
            <CardHeader>
                <Heading size='md'>Submit Info</Heading>
            </CardHeader>
            
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                        Personal Information
                    </Heading>
                    <label htmlFor="firstName">First Name:</label>
                    <Input value={firstNameValue} onChange={handleFirstNameChange} placeholder='First Name' name="firstName" id="firstName"/>

                    <label htmlFor="lastName">Last Name:</label>
                    <Input value={lastNameValue} onChange={handleLastNameChange} placeholder='Last Name' name="lastName" id="lastName"/>
                </Box>

                <Box>
                <Heading size='xs' textTransform='uppercase'>
                        Credit History
                </Heading>
                        <SliderThumbWithTooltip values={creditHistoryValue}/>
                </Box>
                
                <Box>
                <Button type="submit" onClick={validateForm(firstNameValue, lastNameValue, 50)}>Submit</Button>
                </Box>
                </Stack>
            </CardBody>
            </Card>
        </>
    )
}


function SliderThumbWithTooltip() {
    const [sliderValue, setSliderValue] = React.useState(5)
    const [showTooltip, setShowTooltip] = React.useState(false)
    return (
      <Slider
        id='slider'
        defaultValue={5}
        min={0}
        max={100}
        colorScheme='teal'
        onChange={(v) => {
            setSliderValue(v)
            }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
          25%
        </SliderMark>
        <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
          50%
        </SliderMark>
        <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
          75%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg='teal.500'
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={`${sliderValue}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    )
  }

function validateForm(firstNameValue, lastNameValue, creditHistoryValue) {
    console.log("IN HERE")

    if (!firstNameValue || !lastNameValue) {
        // alert('Please enter your full name.')
        return false
      }
  
      if (creditHistoryValue.length < 3) {
        // alert('Roll Number should be at least 3 digits long.')
        return false
      }

    console.log(firstNameValue)
    console.log(lastNameValue)
}
