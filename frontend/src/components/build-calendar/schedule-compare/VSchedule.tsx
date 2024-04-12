import React from 'react'
import {
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    Card, CardHeader, CardBody, CardFooter
} from "@chakra-ui/react"

const VSchedule = () => {
  return (
    <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
        <Tab>Vertical</Tab>
        <Tab>Horizontal</Tab>
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
  )
}

export default VSchedule