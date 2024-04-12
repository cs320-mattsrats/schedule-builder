'use client'

import Layout from "@/components/layout/Layout";
import {
  Button,
  Wrap,
  WrapItem, 
  Grid,
  GridItem,
  Flex,
  IconButton,
  Card, 
  CardBody,
  Select,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel

} from '@chakra-ui/react'
import { 
  CloseIcon, 
  AddIcon,
  ChevronDownIcon,
  HamburgerIcon 
} from '@chakra-ui/icons';
//import CourseButton from "@/components/build-calendar/courseButton/CourseButton";

export default function BuildCalendar() {
  return (
    <Layout>
      <div> 
        <Grid
          // h='400px'
          // templateRows='repeat(2, 1fr)'
          templateColumns='repeat(4, 1fr)'
          gap={4}
        >
          {/* <GridItem rowSpan={2} colSpan={1} bg='tomato' /> */}
          <GridItem colSpan={3} bg='papayawhip' h='200px'>
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
          </GridItem>
          <GridItem colSpan={1} bg='papayawhip' h='300px'>
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
                <Table variant='simple'>
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
                  </Tbody>
                </Table>
              </TableContainer>
              </CardBody>
            </Card>
            
          </GridItem>
          <GridItem colSpan={4} bg='tomato' h='500px'>
            <Tabs variant='unstyled' colorScheme='green'>
              <TabList>
                <Tab>Vertical</Tab>
                <Tab>
                  <IconButton
                    variant='outline'
                    colorScheme='black'
                    aria-label='vert'
                    icon={<HamburgerIcon />}
                  />
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </GridItem>
        </Grid>
      </div>
    </Layout>
  );
}
