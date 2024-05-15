'use client'

import React, {useState, useEffect} from 'react'; 
import Layout from "@/components/layout/Layout";
import {
  Text, SimpleGrid, Flex
} from "@chakra-ui/react";

import Course from '@/components/recommendation/Course'
import Comment from '@/components/recommendation/Comment';
import './page.css';
import Textarea from '@/components/recommendation/Textarea';
import CourseComment from '@/components/recommendation/CourseComment';
import {getRandomCourses} from '@/hook/getRandomCourses';
import { TCourse } from '@/types/courses';
import axios from 'axios';

export default function Recommendation() {

  const [courses, setCourses] = useState<TCourse[]>([]);

  const getCourses = async () => {
    await axios
      .get('http://127.0.0.1:8080/courses')
      .then(response => {
        setCourses(getRandomCourses(response.data.data,5))
        // console.log(response.data.data)
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

      </div>
    </Layout>
  );
}
