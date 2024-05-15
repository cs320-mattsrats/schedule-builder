import React, { useState, useEffect } from 'react';
import { Table, TableCaption, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { TaskDictionary } from '@/types/courses';
import axios from 'axios';
export default function Schedule() {
  // Function to generate time slots from 8 am to 7 pm
  const generateTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 8; hour <= 19; hour++) {
      timeSlots.push(`${hour}:00`);
    }
    return timeSlots;
  };
  const [taskDictionary, setSchedule] = useState<TaskDictionary>({});
  // Function to generate days of the week
  const generateDaysOfWeek = () => {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  };
  useEffect(() => {
    const fetchSelectedSchedule = async () => {
      await axios.get('http://127.0.0.1:8080/get-selected-schedule')
        .then(response => {
          setSchedule(response.data); // Set the schedule state with the fetched data
          console.log('Selected Schedule:', response.data);
        })
        .catch(error => console.error('Error fetching selected schedule:', error));
    };
    fetchSelectedSchedule();
  }, []);


  return (
    <Table className="calendar" variant="simple">
      <TableCaption>Weekly Schedule</TableCaption>
      <Thead>
        <Tr>
          <Th>Time</Th>
          {generateDaysOfWeek().map((day) => (
            <Th key={day}>{day}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {generateTimeSlots().map((time) => (
          <Tr key={time}>
            <Td>{time}</Td>
            {/* Placeholder for schedule slots */}
            {generateDaysOfWeek().map((day) => (
              // Check if the day has tasks at the specific time and render them
              <Td key={`${day}-${time}`}>
                {taskDictionary[day]?.find(task => task.startTime === time)?.title || ''}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
