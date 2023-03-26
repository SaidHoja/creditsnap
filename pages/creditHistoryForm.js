import { Input,InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function creditHistoryInputter(){
    //const [creditAccount, setCreditAccounts] = useState([]) 
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
        <Center >
            <Stack spacing = {3} colorscheme="messenger">
                <InputGroup>
                <InputLeftElement 
                    children="Credit Account 1"
                />
                <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type = "month"
                 />
                </InputGroup>
                <Input 
                 placeholder="Select Date and Time"
                 size="md"
                 type = "month"
                />
                <Input 
                 placeholder="Select Date and Time"
                 size="md"
                 type = "month"
                />
            </Stack>
        </Center>
        </>
    )
}