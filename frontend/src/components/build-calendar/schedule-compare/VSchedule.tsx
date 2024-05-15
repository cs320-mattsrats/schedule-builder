<<<<<<< Updated upstream
import React, { useRef }  from 'react'
import {} from "@chakra-ui/react"
import { TaskDictionary } from '@/types/courses';
import WeeklyViewCalendar from './WeeklyViewCalendar';
const tasks: TaskDictionary = {
  Mon: [{ color: 'yellow', startTime: "15:30", endTime: "16:15" }],
  Tue: [{ color: 'orange', startTime: "10:00", endTime: "11:00" }, { color: 'pink', startTime: "12:00", endTime: "13:15" }],
  Wed: [{ color: 'green', startTime: "13:00", endTime: "14:00" }],
  Thu: [{ color: 'yellow', startTime: "12:00", endTime: "13:15" }],
  Fri: [{ color: 'orange', startTime: "12:00", endTime: "13:15" }, { color: 'green', startTime: "15:30", endTime: "16:15" }]
};
=======
import React, { useRef, useState, useEffect }  from 'react'
import { TaskDictionary } from '@/types/courses';
import WeeklyViewCalendar from './WeeklyViewCalendar';
import { TAllCourses } from '@/types/all_courses';
import axios from 'axios';
import transformData from '@/hook/transformData';
import { TPressed } from '../types';

>>>>>>> Stashed changes

const VSchedule: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

<<<<<<< Updated upstream
  return (
    <div style={{ display: 'flex', overflowX: 'auto', gap: '10px' }}>
      <div style={{ minWidth: '400px', flexShrink: 0,background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><WeeklyViewCalendar tasks={tasks} /></div>
      <div style={{ minWidth: '400px', flexShrink: 0,background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><WeeklyViewCalendar tasks={tasks} /></div>
      <div style={{ minWidth: '400px', flexShrink: 0,background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><WeeklyViewCalendar tasks={tasks} /></div>
      <div style={{ minWidth: '400px', flexShrink: 0,background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><WeeklyViewCalendar tasks={tasks} /></div>
    </div>
=======
  const [taskDic, setTaskDic] = useState<TaskDictionary[]>();

  const getCourses = async () => {
    await axios
      .get('http://127.0.0.1:8080/get-schedule')
      .then(response => {
        setTaskDic(transformData(response.data.data))
        // console.log(taskDic)
      })
  }
//   const selectSchedule = async (TaskDictionary: any) => {
//     await axios.post('http://127.0.0.1:8080/select-schedule', {
//         selectedSchedule: TaskDictionary
//     })
//     .then(response => console.log(response.data.message))
//     .catch(error => console.error('Error posting schedule:', error));
// };

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
    </>
>>>>>>> Stashed changes
  )
}

export default VSchedule