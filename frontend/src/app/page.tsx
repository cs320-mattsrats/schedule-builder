"use client"

import React, {useState, useEffect} from 'react'; 
import Layout from "@/components/layout/Layout";
import Course from "@/components/recommendation/Course";
import { Text, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button, Heading, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import Schedule from '@/components/build-calendar/courseCalendar/Schedule';
import Requirements from '@/components/homepage/Requirements';
import {getRandomCourses} from '@/hook/getRandomCourses';
import { TCourse } from '@/types/courses';
import { mock_courses } from '@/mock/courses';
import axios from 'axios';

export default function Home() {

  const [courses, setCourses] = useState<TCourse[]>([]);

  const getCourses = async () => {
    await axios
      .get('http://127.0.0.1:5000/courses')
      .then(response => {
        setCourses(getRandomCourses(response.data.data,5))
        console.log(response.data.data)
      })
  }

  //Fetch data from the Flask server
  useEffect(() => {
    console.log('Fetching data...');
    getCourses()
  }, [])

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

        {courses ? (
              <SimpleGrid columns={5} spacing={5}>
              {courses.map((course, index) => (
                <Course
                  key = {index} 
                  course = {course}
                />
              ))}
              </SimpleGrid>
          ) : (
              // Page for the loading screen
              <div className="centered">
              <div className="trendbar-loading">
                  <div className="spinner"></div>
                  <p>Loading...</p>
              </div>
          </div>
          )}

          {/* <SimpleGrid columns={5} spacing={5}>
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

          </SimpleGrid> */}
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
          <Requirements/>
        </div>
      </div>
    </Layout>
  );
}
