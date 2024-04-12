import React from 'react'
import {
    Button,
    Wrap,
    WrapItem, 
    Flex,
    IconButton,
  
  } from '@chakra-ui/react'
  import { 
    CloseIcon, 
    AddIcon,
  } from '@chakra-ui/icons';

const Watchlist = () => {
  return (
    <Flex flexDirection={"column"} gap="2">
        <Flex minWidth='max-content' alignItems='center' gap='3' justifyContent={"flex-end"}>
        <Button colorScheme='pink'>Generate</Button>
        <IconButton
            variant='outline'
            colorScheme='black'
            aria-label='delete'
            icon={<CloseIcon />}
        />
        </Flex>
        <Wrap spacing={4} alignItems='center'>
        <WrapItem>
            <Button colorScheme='gray'>CS311</Button>
        </WrapItem>
        <WrapItem>
            <Button colorScheme='red'>CS501</Button>
        </WrapItem>
        <WrapItem>
            <Button colorScheme='orange'>MATH411</Button>
        </WrapItem>
        <WrapItem>
            <Button colorScheme='yellow'>CHEM111</Button>
        </WrapItem>
        <WrapItem>
            <Button colorScheme='green'>CS230</Button>
        </WrapItem>
        <WrapItem>
            <Button colorScheme='teal'>HIST100</Button>
        </WrapItem>
        <WrapItem>
            <Button colorScheme='blue'>MUSIC150</Button>
        </WrapItem>
        <WrapItem>
            <Button colorScheme='cyan'>CS240</Button>
        </WrapItem>
        <WrapItem>
            <Button colorScheme='purple'>MATH233</Button>
        </WrapItem>
        <WrapItem>
            <Button colorScheme='linkedin'>PHYSIC100</Button>
        </WrapItem>
        <WrapItem>
            <Button colorScheme='facebook'>Facebook</Button>
        </WrapItem>
        <WrapItem>
            <Button colorScheme='messenger'>Messenger</Button>
        </WrapItem>
        <WrapItem>
            <Button colorScheme='whatsapp'>Whatsapp</Button>
        </WrapItem>
        <WrapItem>
            <Button colorScheme='twitter'>Twitter</Button>
        </WrapItem>
        <WrapItem>
            <Button colorScheme='telegram'>Telegram</Button>
        </WrapItem>
        <WrapItem>
            <IconButton
            variant='outline'
            colorScheme='teal'
            aria-label='Call Sage'
            fontSize='20px'
            w="150px"
            icon={<AddIcon />}
            />
        </WrapItem>
        </Wrap>
    </Flex>
  )
}

export default Watchlist