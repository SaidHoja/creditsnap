import { Input,InputGroup, InputLeftElement, Stack, IconButton, HStack, Button, Heading } from '@chakra-ui/react'
import { AddIcon,DeleteIcon} from '@chakra-ui/icons'
import { Center, Square, Circle } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function CreditUtilInputter(){
    //const [creditAccount, setCreditAccounts] = useState([]) 
    const [creditUtils, setCreditUtils] = useState([
        {balance: "", limit: ""}
    ]);
    function AddRow(){
        console.log("button pressed")
        let newCreditUtil =  {balance: "", limit: ""}
        setCreditUtils([...creditUtils,newCreditUtil])
    }
    function HandleChange(event,index){
        let data = [...creditUtils];
        data[index][event.target.name] = event.target.value;
        setCreditUtils(data)
    }
    function RemoveItem(index){
        let data = [...creditUtils];
        data.splice(index, 1)
        setCreditUtils(data)
    }

    //console.log(creditDates)
    return (
        <>
        <Center >
            <Stack spacing = {4} >
                <HStack><Heading>Balance    </Heading><Heading>Limit</Heading></HStack>
                {
                 creditUtils.map( (input,index) => {
                    return (
                        <HStack>
                        <InputGroup key = {index}>
                            <InputLeftElement children = {index + 1} />
                            <Input
                                name = 'creditBalance'
                                type = "number"
                                value={input.creditBalance}
                                onChange = {event => HandleChange(event,index)}
                                min= "0"

                            />
                            <Input
                                name = 'creditLimit'
                                type = "number"
                                value={input.creditLimit}
                                onChange = {event => HandleChange(event,index)}
                                min = "0"
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
