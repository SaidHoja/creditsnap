import { Input,InputGroup, InputLeftElement, Stack, IconButton, HStack } from '@chakra-ui/react'
import { AddIcon} from '@chakra-ui/icons'
import { Center, Square, Circle } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function creditHistoryInputter(){
    //const [creditAccount, setCreditAccounts] = useState([]) 
    const [creditDates, setCreditDates] = useState([
        {startDate: "", endDate: ""},{startDate: "", endDate: ""}
    ]);
    function AddRow(){
        console.log("button pressed")
        let newCreditDate =  {startDate: "", endDate: ""}
        setCreditDates([...creditDates,newCreditDate])
    }
    function HandleChange(event,index){
        let data = [...creditDates];
        data[index][event.target.name] = event.target.value;
        setCreditDates(data)
    }
    console.log(creditDates)
    return (
        <>
        <Center >
            <Stack spacing = {3} colorscheme="messenger">
                {
                 creditDates.map( (input,index) => {
                    return (
                        <InputGroup key = {index}>
                            <InputLeftElement children = {index + 1} />
                            <Input
                                name = 'startDate'
                                size="md"
                                type = "month"
                                value={input.startDate}
                                onChange = {event => HandleChange(event,index)}
                            />
                            <Input
                                name = 'endDate'
                                size="md"
                                type = "month"
                                value={input.endDate}
                                onChange = {event => HandleChange(event,index)}
                            />
                    </InputGroup>
                    )
                }
                
                )}
                 <IconButton onClick={AddRow} icon={<AddIcon />}/>
            </Stack>
        </Center>
        </>
        
    )
}
/*
                <InputGroup>
                    <InputLeftElement 
                        children="1"
                    />
                    <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type = "month"
                    />
                 </InputGroup>
                 <IconButton onClick="AddRow" icon={<AddIcon />} />
*/