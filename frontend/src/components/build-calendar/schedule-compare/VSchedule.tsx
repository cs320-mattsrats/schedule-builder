import React, { useRef }  from 'react'
import {
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    Card, CardHeader, CardBody, CardFooter
} from "@chakra-ui/react"
import { TaskDictionary } from '@/types/courses';
import WeeklyViewCalendar from './WeeklyViewCalendar';
const tasks: TaskDictionary = {
  Mon: [{ color: 'yellow', startTime: "15:30", endTime: "16:15" }],
  Tue: [{ color: 'orange', startTime: "10:00", endTime: "11:00" }, { color: 'pink', startTime: "12:00", endTime: "13:15" }],
  Wed: [{ color: 'green', startTime: "13:00", endTime: "14:00" }],
  Thu: [{ color: 'yellow', startTime: "12:00", endTime: "13:15" }],
  Fri: [{ color: 'orange', startTime: "12:00", endTime: "13:15" }, { color: 'green', startTime: "15:30", endTime: "16:15" }]
};

const VSchedule: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
        <Tab>Vertical</Tab>
        <Tab>Horizontal</Tab>
        </TabList>
        <TabPanels>
        <TabPanel>
        <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <WeeklyViewCalendar tasks={tasks} />
      </div>
      <div style={{ flex: 1, backgroundColor: 'grey', overflowY: 'auto' }}>
        {/* Content that will be vertically scrollable */}
        <div style={{ padding: '20px' }}>
          <h2>Additional Content</h2>
          <p>This area is for additional content that may be vertically scrollable. Add your custom components or other elements as needed here.</p>
          {/* Example content */}
          {Array.from({ length: 50 }, (_, i) => (
            <p key={i}>Item {i + 1}</p>
          ))}
        </div>
      </div>
    </div>
        </TabPanel>
        <TabPanel>
        <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', padding: '20px' }}>
        <div style={{ minWidth: '400px', flexShrink: 0,background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><WeeklyViewCalendar tasks={tasks} /></div>
        <div style={{ minWidth: '400px', flexShrink: 0,background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><WeeklyViewCalendar tasks={tasks} /></div>
        <div style={{ minWidth: '400px', flexShrink: 0,background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><WeeklyViewCalendar tasks={tasks} /></div>
        </div>
        </TabPanel>
        </TabPanels>
    </Tabs>
  )
}

export default VSchedule