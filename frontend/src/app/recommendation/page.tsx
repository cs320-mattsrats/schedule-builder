'use client'

import React, {useState, useEffect} from 'react'; 
import Layout from "@/components/layout/Layout";
import {
  Text, SimpleGrid, Flex,
  Textarea
} from "@chakra-ui/react";

import Course from '@/components/recommendation/Course'
import Comment from '@/components/recommendation/Comment';
import './page.css';
import {getRandomCourses} from '@/hook/getRandomCourses';
import { TCourse } from '@/types/courses';
import axios from 'axios';

export default function Recommendation() {

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
            Hot Courses
          </Text>
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
            {courses.map((x, index) => (
              <Course
                key = {index} 
                courseTitle = {x.title}
                courseDescription = {x.description}
                courseSubject = {x.subject}
                // professor='Marius Minea'
                // location1='ILC S131'
                // time1='8:30AM'
                // days1='TTH'
                // type1='LEC'
                // location2='ILC S131'
                // time2='10:10AM'
                // days2='F'
                // type2='DIS'
              />
            ))}

            <Course 
              courseTitle='CS 230: Computer Systems Principles'
              courseDescription="Most iconic class with the most iconic professor Joe Chiu."
              professor='Joe Chiu'
              location1='HAS 20'
              time1='2:30PM'
              days1='TTH'
              type1='LEC'
              location2='CS 140'
              time2='9:05AM'
              days2='F'
              type2='DIS'>
            </Course>

            <Course 
              courseTitle='CS 250: Introduction to Computation'
              courseDescription="Most iconic class with the most iconic professor David Mix Barrington."
              professor='David Mix Barrington'
              location1='GOES 51'
              time1='1:25PM'
              days1='MWF'
              type1='LEC'
              location2='LGRC 301A'
              time2='10:00AM'
              days2='T'
              type2='DIS'>
            </Course>

            <Course 
              courseTitle='CS 311: Introduction to Algorithms'
              courseDescription="Most iconic class with the most iconic professor Ghazaleh Parvini."
              professor='Ghazaleh Parvini'
              location1='GOES 51'
              time1='2:30PM'
              days1='MWF'
              type1='LEC'
              location2='LGRC 302A'
              time2='10:00AM'
              days2='T'
              type2='DIS'>
            </Course>

            <Course 
              courseTitle='CS 320: Introduction to Software Engineering'
              courseDescription="Most iconic class with the most iconic professor Matthew Rattigan (WOO HOO :))."
              professor='Matthew Rattigan'
              location1='MOR2 127'
              time1='2:30PM'
              days1='MWF'
              type1='LEC'
              location2='LGRT 141'
              time2='1:25PM'
              days2='W'
              type2='DIS'>
            </Course>
            
          </SimpleGrid> */}
          

          <Text
            as={"span"}
            bgGradient={
              "linear(to-tr, brand.main, brand.200, brand.300, brand.400, brand.600)"
            }
            fontSize={{ md: "60px", sm: "6xl" }}
            fontWeight="extrabold"
          >
            Student Feedback
          </Text>
          <Textarea placeholder='Post a comment about this course!'>
          </Textarea>
          <Flex>
          <Comment comment="Marius is the coolest!" course="CS311">
          </Comment>
          <div></div>
          <Comment comment="best class ever!" course="CS311">
          </Comment>
          <Comment comment="Lots of office hours, covers a lot of material" course="CS311">
          </Comment>
          <div></div>
          <Comment comment="lecture heavy course" course="CS311">
          </Comment>
          </Flex>
      </div>
    </Layout>
  );
}
