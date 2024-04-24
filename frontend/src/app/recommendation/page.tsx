'use client'

import Layout from "@/components/layout/Layout";
import {
  Text, SimpleGrid
} from "@chakra-ui/react";

import Course from '@/components/recommendation/Course'
import Comment from '@/components/recommendation/Comment'
import './page.css'

export default function Recommendation() {
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

          <SimpleGrid columns={5} spacing={5}>
            <Course 
              courseTitle='CS 220: Programming Methodology'
              courseDescription="Most iconic class with the most iconic professor Marius Minea."
              professor='Marius Minea'
              location1='ILC S131'
              time1='8:30AM'
              days1='TTH'
              type1='LEC'
              location2='ILC S131'
              time2='10:10AM'
              days2='F'
              type2='DIS'>
            </Course>

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
            
          </SimpleGrid>
          

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
          <Comment height = "150px" width = "300px" color = "lightblue" comment="Marius is the coolest!" course="CS311">
          </Comment>
          <div></div>
          <Comment height = "125px" width = "250px" color = "lavender" comment="best class ever!" course="CS311">
          </Comment>

      </div>
    </Layout>
  );
}
