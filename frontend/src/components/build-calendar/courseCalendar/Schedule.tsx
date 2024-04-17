import React from 'react';
import { Table, TableCaption, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

export default function Schedule() {
  // Function to generate time slots from 8 am to 7 pm
  const generateTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 8; hour <= 19; hour++) {
      timeSlots.push(`${hour}:00`);
    }
    return timeSlots;
  };

  // Function to generate days of the week
  const generateDaysOfWeek = () => {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
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
            {/* Placeholder for schedule slots */}
            {generateDaysOfWeek().map((day) => (
              <Td key={`${day}-${time}`}></Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
