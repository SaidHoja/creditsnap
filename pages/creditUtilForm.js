import { Input,InputGroup, InputLeftElement, Stack, IconButton, HStack, Button, Heading } from '@chakra-ui/react'
import { AddIcon,DeleteIcon} from '@chakra-ui/icons'
import { Center, Square, Circle } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function CreditUtilInputter(){
    //const [creditAccount, setCreditAccounts] = useState([]) 
    const [creditDates, setCreditDates] = useState([
        {startDate: "", endDate: ""}
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
    function RemoveItem(index){
        let data = [...creditDates];
        data.splice(index, 1)
        setCreditDates(data)
    }
    function GetTodayDate(){
        let month = new Date().getMonth() + 1
        if (month<10)
            month = "0" + month
        let x = ("" + new Date().getFullYear() + "-" + month)
        //console.log(x)
        return x;
    }
    //console.log(creditDates)
    return (
        <>
        

        <Center >
            <Stack spacing = {4} >
                <HStack><Heading>Start Date    </Heading><Heading>End Date</Heading></HStack>
                {
                 creditDates.map( (input,index) => {
                    return (
                        <HStack>
                        <InputGroup key = {index}>
                            <InputLeftElement children = {index + 1} />
                            <Input
                                name = 'startDate'
                                type = "month"
                                value={input.startDate}
                                onChange = {event => HandleChange(event,index)}
                                max = {GetTodayDate()}

                            />
                            <Input
                                name = 'endDate'
                                type = "month"
                                value={input.endDate}
                                onChange = {event => HandleChange(event,index)}
                                min = {creditDates[index].startDate}
                                max = {GetTodayDate()}
                            />

                    </InputGroup>
                    <IconButton icon={<DeleteIcon/>} onClick={RemoveItem} >Remove</IconButton>
                    </HStack>
                    )
                }
                
                )}
                 <IconButton colorScheme = "messenger" onClick={AddRow} icon={<AddIcon />}/>
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