'use client'

import Layout from "@/components/layout/Layout";
import {
  Grid,
  GridItem,
} from '@chakra-ui/react'
//import CourseButton from "@/components/build-calendar/courseButton/CourseButton";
import VSchedule from "@/components/build-calendar/schedule-compare/VSchedule";
import Watchlist from "@/components/build-calendar/watchlist/Watchlist";
import CourseHistory from "@/components/build-calendar/courseHistory/CourseHistory";
import { useState } from "react";

export default function BuildCalendar() {

  const [pressed, setPressed] = useState<boolean>(false);

  const toggle = () => {
    setPressed((pressed ) => !pressed);
    console.log('press?', pressed)
  }

  return (
    <Layout>
      <div> 
        <Grid
          templateColumns='repeat(4, 1fr)'
          gap={4}
        >
          <GridItem colSpan={3}  h='200px'>
            <Watchlist pressed = {pressed} toggle = {toggle}/>
          </GridItem>
          <GridItem colSpan={1}  h='250px'>
            <CourseHistory/>
          </GridItem>
          <GridItem colSpan={4}  h='500px'>
            <VSchedule pressed = {pressed} toggle={toggle}/>              
          </GridItem>
        </Grid>
      </div>
    </Layout>
  );
}
