import React, { useRef, useState, useEffect }  from 'react'
import {} from "@chakra-ui/react"
import { TaskDictionary } from '@/types/courses';
import WeeklyViewCalendar from './WeeklyViewCalendar';
import { TAllCourses } from '@/types/all_courses';
import axios from 'axios';
import transformData from '@/hook/transformData';
import { TPressed } from '../types';
const task: TaskDictionary = {
  "Mon": [
    { "color": "yellow", "id": "LEC02", "classNumber": "230", "subject": "COMPSCI", "title": "Computer Systems Principles", "startTime": "15:30", "endTime": "16:15", "location": "HasbAd 124", "instructor": "Bovornkeeratiroj" }
  ],
  "Tue": [
    { "color": "orange", "id": "LEC01", "classNumber": "305", "subject": "CICS", "title": "Social Issues in Computing", "startTime": "10:00", "endTime": "11:00", "location": "MOR1N349", "instructor": "Mei" },
    { "color": "pink", "id": "LEC12", "classNumber": "305", "subject": "CICS", "title": "Social Issues in Computing", "startTime": "12:00", "endTime": "13:15", "location": "LGRC A310", "instructor": "Mei" }
  ],
  "Wed": [
    { "color": "green", "id": "LEC02", "classNumber": "230", "subject": "COMPSCI", "title": "Computer Systems Principles", "startTime": "13:00", "endTime": "14:00", "location": "HasbAd 124", "instructor": "Bovornkeeratiroj" }
  ],
  "Thu": [
    { "color": "yellow", "id": "LEC01", "classNumber": "305", "subject": "CICS", "title": "Social Issues in Computing", "startTime": "12:00", "endTime": "13:15", "location": "MOR1N349", "instructor": "Mei" }
  ],
  "Fri": [
    { "color": "orange", "id": "LAB02LN", "classNumber": "230", "subject": "COMPSCI", "title": "Computer Systems Principles", "startTime": "12:00", "endTime": "13:15", "location": "SKIN0106", "instructor": "Bovornkeeratiroj" },
    { "color": "green", "id": "LAB02LQ", "classNumber": "230", "subject": "COMPSCI", "title": "Computer Systems Principles", "startTime": "15:30", "endTime": "16:15", "location": "SKIN0106", "instructor": "Bovornkeeratiroj" }
  ]
}


const VSchedule: React.FC<TPressed> = ({pressed, toggle}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  const [taskDic, setTaskDic] = useState<TaskDictionary[]>();

  const getCourses = async () => {
    await axios
      .get('http://127.0.0.1:8080/get-schedule')
      .then(response => {
        setTaskDic(transformData(response.data.data))
        // console.log(taskDic)
      })
  }

  //Fetch data from the Flask server
  useEffect(() => {
    console.log('Fetching data...');
    getCourses()
  }, [pressed])

  return (
    <>
      {
        taskDic ? (
          <div style={{ display: 'flex', overflowX: 'auto', gap: '10px' }}>
            {
              taskDic.map((tasks, index) => (
                <div style={{ minWidth: '400px', flexShrink: 0,background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }} key = {index}>
                  <WeeklyViewCalendar 
                    // key = {index} 
                    tasks = {tasks}
                  />
                </div>
              ))
            }
          </div>
        ) : (
          // Page for the loading screen
          <div className="centered">
          <div className="trendbar-loading">
              <div className="spinner"></div>
              <p>Loading...</p>
          </div>
      </div>
      )
      }
       {/* <div style={{ display: 'flex', overflowX: 'auto', gap: '10px' }}>
     <div style={{ minWidth: '400px', flexShrink: 0,background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><WeeklyViewCalendar tasks={tasks} /></div>
      <div style={{ minWidth: '400px', flexShrink: 0,background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><WeeklyViewCalendar tasks={tasks} /></div>
      <div style={{ minWidth: '400px', flexShrink: 0,background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><WeeklyViewCalendar tasks={tasks} /></div>
      <div style={{ minWidth: '400px', flexShrink: 0,background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><WeeklyViewCalendar tasks={tasks} /></div> 
    </div> */}
    </>
  )
}

export default VSchedule