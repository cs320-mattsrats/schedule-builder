import Layout from "@/components/layout/Layout";
import Course from "@/components/recommendation/Course";
import { Text, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button, Heading, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import Schedule from '@/components/build-calendar/courseCalendar/Schedule'

export default function Home() {
  return (
    <Layout>
      <div>
        <Text
          as={"span"}
          bgGradient={
            "linear(to-tr, brand.main, brand.200, brand.300, brand.400, brand.600)"
          }
          fontSize={{ md: "60px", sm: "6xl" }}
          fontWeight="extrabold"
        >
          Watchlist
        </Text>

        {/* Parent container for the SimpleGrid of courses */}
        <div style={{ marginTop: '20px' }}>
          <SimpleGrid columns={5} spacing={5}>
            <Course 
              courseTitle='CS 220: Programming Methodology'
              courseDescription="Most iconic class with the most iconic professor Marius Minea."
              courseMoreDetails="Class meets from 1-2pm and in ILC N151">
            </Course>

            <Course 
              courseTitle='CS 230: Computer Systems Principles'
              courseDescription="Most iconic class with the most iconic professor Joe Chiu."
              courseMoreDetails="Class meets from 2-3pm and in Hasbrouck 20">
            </Course>

            <Course 
              courseTitle='CS 250: Introduction to Computation'
              courseDescription="Most iconic class with the most iconic professor David Mix Barrington."
              courseMoreDetails="Class meets from 1-2pm and in Goessman">
            </Course>

            <Course 
              courseTitle='CS 311: Introduction to Algorithms'
              courseDescription="Most iconic class with the most iconic professor Ghazaleh Parvini."
              courseMoreDetails="Class meets from 11am-12pm and in Goessman">
            </Course>

            <Course 
              courseTitle='CS 320: Introduction to Software Engineering'
              courseDescription="Most iconic class with the most iconic professor Matthew Rattigan (WOO HOO :))."
              courseMoreDetails="Class meets from 2:30pm-3:45pm and in Morril Ctr 1 rm N326">
            </Course>

          </SimpleGrid>
        </div>

        <Text
          as={"span"}
          bgGradient={
            "linear(to-tr, brand.main, brand.200, brand.300, brand.400, brand.600)"
          }
          fontSize={{ md: "60px", sm: "6xl" }}
          fontWeight="extrabold"
        >
          Current Schedule
        </Text>

        <Schedule/>
        
        <div>
        <Text
          as={"span"}
          bgGradient={
            "linear(to-tr, brand.main, brand.200, brand.300, brand.400, brand.600)"
          }
          fontSize={{ md: "60px", sm: "6xl" }}
          fontWeight="extrabold"
        >
          Classes Left to Take
        </Text>

        {/* Separate div for the checkboxes */}
        <div style={{ marginTop: '10px' }}>
          <div>
            <Checkbox>CS 220</Checkbox>
          </div>
          <div>
            <Checkbox>CS 250</Checkbox>
          </div>
          <div>
            <Checkbox>CS 501</Checkbox>
          </div>
          {/* Add more classes as needed */}
  
        </div>
      </div>
      </div>
    </Layout>
  );
}
