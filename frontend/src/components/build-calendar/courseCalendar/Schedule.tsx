import React, { useState, useEffect } from 'react';
import { Table, TableCaption, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { TaskDictionary } from '@/types/courses';
import axios from 'axios';

export default function Schedule() {
  // Function to generate time slots from 8 am to 7 pm
  const generateTimeSlots = () => {
    const timeSlots: string[] = [];
    for (let hour = 8; hour <= 19; hour++) {
      timeSlots.push(`${hour}:00`);
    }
    return timeSlots;
  };

  const [taskDictionary, setSchedule] = useState<TaskDictionary>({});

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

  // Function to generate days of the week
  const generateDaysOfWeek = () => {
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  };

  const getClassInfo = (day: string, time: string) => {
    const dayData = taskDictionary[day];
    if (dayData) {
      return dayData.find((item) => {
        const [startHour, startMinute] = item.startTime.split(':').map(Number);
        const [checkHour, checkMinute] = time.split(':').map(Number);
        const startTimeInMinutes = startHour * 60 + startMinute;
        const checkTimeInMinutes = checkHour * 60 + checkMinute;
        return checkTimeInMinutes <= startTimeInMinutes && checkTimeInMinutes + 59 >= startTimeInMinutes;
      }) || null;
    }
    return null;
  };
  

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
            {generateDaysOfWeek().map((day) => (
              <Td key={`${day}-${time}`}>
                {getClassInfo(day, time) && (
                  <>
                    <div>{getClassInfo(day, time)!.subject} {getClassInfo(day, time)!.classNumber}</div>
                  </>
                )}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
