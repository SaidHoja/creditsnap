"use client";
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
    Center,
    FormControl,
  } from '@chakra-ui/react'
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
  import React, { useState, createContext, useContext, useEffect } from 'react';
  import { getFirebaseAuth } from '@/config/fireBaseAuthContext';
  import {getDatabase, ref,set} from 'firebase/database'
  import CreditHistoryInputter from 'pages/Components/creditHistoryForm.js'
  import CreditPaymentHistory from 'pages/Components/creditPaymentHistory.js'
  import {getFirestore, doc, setDoc} from 'firebase/firestore'
  import NavBar from 'pages/navbar.jsx'


export default function Form() {
  const [firstNameValue, setFirstNameValue] = useState('')
  const [lastNameValue, setLastNameValue] = useState('')
  const [creditHistoryValue, setCreditHistoryValue] = useState(5)
  const context = getFirebaseAuth()

  
  return (
    <>
    <NavBar/>
    <Center>
      <Tabs>
        <TabList>
          <Tab >Credit History</Tab>
          <Tab >Credit Utilization</Tab>
          <Tab >Credit History Length</Tab>
          <Tab >Credit Mix</Tab>
          <Tab >New Credit</Tab>
          <Tab >Review</Tab>
        </TabList>

        <TabPanels>
          <Center>
          <TabPanel>
                {CreditPaymentHistory()}
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
    </>
  );
}

async function validateForm(firstNameValue, lastNameValue, creditHistoryValue, context) {
  if (!firstNameValue || !lastNameValue) {
    alert('Please enter your full name.')
    return false;
  }

  if (creditHistoryValue.length < 3) {
    alert('Roll Number should be at least 3 digits long.')
    return false;
  }

  console.log(creditHistoryValue);

  const userId = context.user.auth.currentUser.reloadUserInfo.localId
  const db = getFirestore();

  try{
    const time = Date.now()
      await setDoc(doc(db, "users", userId),
      {creditScores: {
        [time]:{
          creditHistoryPct:creditHistoryValue
        },
      },
      firstName:firstNameValue,
      lastName:lastNameValue,
    })
    console.log("wrote2")
  } catch (error) {
    console.log(error, 'from Firestone')
  }

  console.log("wrote3")
}