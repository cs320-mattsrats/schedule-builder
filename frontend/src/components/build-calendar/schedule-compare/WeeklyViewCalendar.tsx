import React, { useState } from 'react';
import { Table, TableCaption, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

import { Task } from '@/types/courses';
import { TaskDictionary } from '@/types/courses';

interface WeeklyPlannerProps {
  tasks: TaskDictionary;
}
const tasks: TaskDictionary = {
  Mon: [{ color: 'yellow', startTime: "15:30", endTime: "16:15" }],
  Tue: [{ color: 'orange', startTime: "10:00", endTime: "11:00" }, { color: 'pink', startTime: "12:00", endTime: "13:15" }],
  Wed: [{ color: 'green', startTime: "13:00", endTime: "14:00" }],
  Thu: [{ color: 'yellow', startTime: "12:00", endTime: "13:15" }],
  Fri: [{ color: 'orange', startTime: "12:00", endTime: "13:15" }, { color: 'green', startTime: "15:30", endTime: "16:15" }]
};
export const timeToPosition = (startTime: string, endTime: string, scale: number = 60) => {
  const parseTime = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const startMinutes = parseTime(startTime);
  const endMinutes = parseTime(endTime);
  const top = (startMinutes - 9 * 60) * scale / 60;  // Adjust 9 * 60 to the start of your calendar day in minutes
  const height = (endMinutes - startMinutes) * scale / 60;

  return { top, height };
};
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];  
const WeeklyViewCalendar: React.FC<WeeklyPlannerProps> = ({ tasks }) => {
  // Function to generate time slots from 8 am to 7 pm
  return (
    <div style={{ width:'100%',display: 'flex', height: '540px', border: '1px solid #ccc' }}> {/* 540px = 9 hours * 60px per hour */}
      {days.map(day => (
        <div key={day} style={{ flex: 1, margin: '5px', position: 'relative' }}>
          <div>{day}</div>
          {tasks[day]?.map((task, index) => {
            const { top, height } = timeToPosition(task.startTime, task.endTime);
            return (
              <div key={index} style={{
                position: 'absolute',
                top: `${top}px`,
                width: '100%',
                height: `${height}px`,
                backgroundColor: task.color,
                color: 'white',
              }}>
                {`${task.startTime} - ${task.endTime}`}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
export default WeeklyViewCalendar;