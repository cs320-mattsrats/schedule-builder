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

export default function BuildCalendar() {
  return (
    <Layout>
      <div> 
        <Grid
          templateColumns='repeat(4, 1fr)'
          gap={4}
        >
          <GridItem colSpan={3}  h='200px'>
            <Watchlist/>
          </GridItem>
          <GridItem colSpan={1}  h='250px'>
            <CourseHistory/>
          </GridItem>
          <GridItem colSpan={4}  h='500px'>
            <VSchedule/>              
          </GridItem>
        </Grid>
      </div>
    </Layout>
  );
}
