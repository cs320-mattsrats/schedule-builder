import React, { useRef }  from 'react'
import {} from "@chakra-ui/react"
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
    <div style={{ display: 'flex', overflowX: 'auto', gap: '10px' }}>
      <div style={{ minWidth: '400px', flexShrink: 0,background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><WeeklyViewCalendar tasks={tasks} /></div>
    </div>
  )
}

export default VSchedule