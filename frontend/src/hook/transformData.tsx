import { TAllCourses } from "@/types/all_courses";
import { TaskDictionary } from "@/types/courses";

function convertTimeFormat(timeString: string): string {
    const [time, period] = timeString.split(' ');
    const [hours, minutes] = time.split(':');

    let convertedHours: number = parseInt(hours, 10);
    if (period.toLowerCase() === 'pm' && convertedHours !== 12) {
        convertedHours += 12;
    } else if (period.toLowerCase() === 'am' && convertedHours === 12) {
        convertedHours = 0;
    }

    const formattedHours = convertedHours.toString().padStart(2, '0');
    const formattedMinutes = minutes.padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
}

const colors = ['red', 'gray', 'orange', 'yellow', 'green', 'teal', 'cyan', 'purple', 'pink'];

function getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

export default function transformData(data: TAllCourses[][]): TaskDictionary[] {
    const allTaskDic: TaskDictionary[] = [{}];

    // console.log('what', data)

    data.forEach((courses) => {
        const taskDictionary: TaskDictionary = {};
        courses.forEach((course) => {
            const courseColor = getRandomColor();

            course.section.forEach((s) => {
                s.day.forEach((day) => {
                    if (!taskDictionary[day]) {
                      taskDictionary[day] = [];
                    }
            
                    taskDictionary[day].push({
                      id: s.id,
                      classNumber: course.classNumber,
                      subject: course.subject,
                      title: course.title,
                      startTime: convertTimeFormat(s.starttime),
                      endTime: convertTimeFormat(s.endtime),
                      location: s.location,
                      instructor: s.instructor,
                      color: courseColor
                    });
                });
                if (s.lab) {
                    s.lab.forEach((l) => {
                        l.day.forEach((day) => {
                            if (!taskDictionary[day]) {
                              taskDictionary[day] = [];
                            }
                    
                            taskDictionary[day].push({
                              id: s.id,
                              classNumber: course.classNumber,
                              subject: course.subject,
                              title: course.title,
                              startTime: convertTimeFormat(l.starttime),
                              endTime: convertTimeFormat(l.endtime),
                              location: l.location,
                              instructor: s.instructor,
                              color: courseColor
                            });
                        }); 
                    })
                }
            })
        });
        console.log('color', taskDictionary);
        allTaskDic.push(taskDictionary);
    });

  return allTaskDic.slice(1);
  }