import React from 'react'
import {
    Button,
    Wrap,
    WrapItem
  } from '@chakra-ui/react'

const CourseButton = () => {
  return (
    <div>
        <Wrap spacing={4}>
            <WrapItem>
            <Button colorScheme='gray'>Gray</Button>
            </WrapItem>
            <WrapItem>
            <Button colorScheme='red'>Red</Button>
            </WrapItem>
        </Wrap>
    </div>
  )
}

export default CourseButton