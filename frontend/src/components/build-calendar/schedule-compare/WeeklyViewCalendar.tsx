import React, { useState } from 'react';
import { IconButton, Box, Text } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';

import { Task } from '@/types/courses';
import { TaskDictionary } from '@/types/courses';
import CourseDescription from './CourseDescription';
import axios from 'axios';

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

const selectSchedule = async (taskDictionary: TaskDictionary) => {
  await axios.post('http://127.0.0.1:8080/select-schedule', {
      selectedSchedule: taskDictionary
  }).then(response => console.log(response.data.message))
    .catch(error => console.error('Error posting schedule:', error));
};

const WeeklyViewCalendar: React.FC<WeeklyPlannerProps> = ({ tasks }) => {
  // Function to generate time slots from 8 am to 7 pm
  return (
    <Box width="100%" display="flex" height="540px" border="1px solid #ccc">
      {days.map(day => (
        <Box key={day} flex="1" m="5px" position="relative">
          <div>{day}</div>
          {tasks[day]?.map((task, index) => {
            const { top, height } = timeToPosition(task.startTime, task.endTime);
            return (
              <Box key={index} position="absolute" top={`${top}px`} width="100%" height={`${height}px`} bg={task.color} color="white">
              <Text>{`${task.startTime} - ${task.endTime}`}</Text>
              <CourseDescription courseInfo={`Starts: ${task.startTime}, Ends: ${task.endTime}, Color: ${task.color}`} />
            </Box>
          );
        })}
      </Box>
    ))}
  
      <div style={{  bottom:'0px'}}>
      <IconButton
            // variant='outline'
            aria-label='Add Course'
            size='sm'
            colorScheme='blue'
            icon={<CalendarIcon />}
            onClick={() => selectSchedule(tasks)}
        />
      </div>
    </Box>
  );
}
export default WeeklyViewCalendar;