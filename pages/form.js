"use client";
import ShowTooltipSlider from '@/components/showTooltipSlider';
// import ShowTooltipSlider from "@/components/ShowTooltipSlider";
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
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
  import React, { useState, createContext, useContext, useEffect } from 'react';
  import { getFirebaseAuth } from '@/config/fireBaseAuthContext';
  import {getDatabase, ref,set} from 'firebase/database'
  import CreditHistoryInputter from 'pages/Components/creditHistoryForm.js'

export default function Form({ props }) {
  const [firstNameValue, setFirstNameValue] = useState('')
  const [lastNameValue, setLastNameValue] = useState('')
  const [creditHistoryValue, setCreditHistoryValue] = useState('')

  const [showTooltip, setShowTooltip] = React.useState(false)
  const [dataNeedsSubmit, setDataNeedsSubmit] = useState(false)


  const handleFirstNameChange = (event) => setFirstNameValue(event.target.value);
  const handleLastNameChange = (event) => setLastNameValue(event.target.value);
  const handleMortageListChange = (event) => setMortageListValue(event => [...event.target.value]);
  const handleCarLoanListChange = (event) => setCarLoanValue(event => [...event.target.value]);
  const handleExtraneuousLoanListChange =
    (event) => setExtraneuousLoanListValue(event => [...event.target.value]);
  const handleCreditHistoryChange = (v) => setCreditHistoryValue(v);

  
  return (
    <>
    <Center>
      <Tabs>
        <TabList>
          <Tab isDisabled>Credit History</Tab>
          <Tab isDisabled>Credit Utilization</Tab>
          <Tab isDisabled>Credit History Length</Tab>
          <Tab isDisabled>Credit Mix</Tab>
          <Tab isDisabled>New Credit</Tab>
          <Tab isDisabled>Review</Tab>
        </TabList>

        <TabPanels>
          <Center>
          <TabPanel>
                <Heading size="lg" textTransform="uppercase">
                  Credit History
                </Heading>
                <ShowTooltipSlider onCreditData={handleCreditHistoryChange}></ShowTooltipSlider>
          </TabPanel>
          </Center>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            {CreditHistoryInputter()}
          </TabPanel>
          <TabPanel>
            <p>four!</p>
          </TabPanel>
          <TabPanel>
            <p>five!</p>
          </TabPanel>
          <TabPanel>
            <p>six!</p>
          </TabPanel>
          
        </TabPanels>
      </Tabs>
      </Center>
      <h1>
        For the Following Questions, please refer to data from the past 7 years
      </h1>
      <Center>
        <Card align="center" maxWidth="50%">
          <CardHeader>
            <Heading size="md">Submit Info</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">

              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Credit History
                </Heading>
                <ShowTooltipSlider onCreditData={handleCreditHistoryChange}></ShowTooltipSlider>
              </Box>
              <Box>
                <Center>
                  <Heading size="s">Add Non-Credit-Card Loans</Heading>
                </Center>
                <VStack w="full"
                  divider={<StackDivider borderColor="gray.200" />} >
                  <Button colorScheme="messenger" onClick={addNewLoan}>Add Loan</Button>
                </VStack>
              </Box>
              <Box>
                <Button
                  type="submit"
                  onClick={validateForm(
                    firstNameValue,
                    lastNameValue,
                    creditHistoryValue
                  )}
                >
                  Submit
                </Button>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Center>
    </>
  );
}

function addNewLoan() {
  console.log("temp")
}

function validateForm(firstNameValue, lastNameValue, creditHistoryValue) {
  console.log("IN HERE");

  if (!firstNameValue || !lastNameValue) {
    // alert('Please enter your full name.')
    return false;
  }

  if (creditHistoryValue.length < 3) {
    // alert('Roll Number should be at least 3 digits long.')
    return false;
  }

  console.log(firstNameValue);
  console.log(lastNameValue);
  console.log(creditHistoryValue);
  writeCreditData()
}

function writeCreditData() {
  const context = getFirebaseAuth();
  const userId = context.user.auth.currentUser.reloadUserInfo.localId
  const db = getDatabase();
  console.log(userId)
}