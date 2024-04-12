import React from 'react';
import {
    Grid,
    GridItem,
    Card, 
    CardBody,
    Select,
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
  
} from '@chakra-ui/react'

const CourseHistory = () => {
  return (
    <Card key={'outline'} variant={"filled"}>
        <Select placeholder='Fall 2023'>
        <option value='option1'>Spring 2021</option>
        <option value='option2'>Fall 2021</option>
        <option value='option3'>Spring 2022</option>
        <option value='option4'>Fall 2022</option>
        <option value='option5'>Spring 2023</option>
        <option value='option6'>Fall 2023</option>
        </Select>
        <CardBody>
        <TableContainer>
        <Table variant='simple' size='sm'>
            <Tbody>
            <Tr>
                <Td>CS121</Td>
                <Td>CS Major</Td>
            </Tr>
            <Tr>
                <Td>BIO151</Td>
                <Td>BS</Td>
            </Tr>
            <Tr>
                <Td>PSYCHO100</Td>
                <Td>SB</Td>
            </Tr>
            <Tr>
                <Td>PSYCHO100</Td>
                <Td>SB</Td>
            </Tr>
            <Tr>
                <Td>PSYCHO100</Td>
                <Td>SB</Td>
            </Tr>
            </Tbody>
        </Table>
        </TableContainer>
        </CardBody>
    </Card>
  )
}

export default CourseHistory