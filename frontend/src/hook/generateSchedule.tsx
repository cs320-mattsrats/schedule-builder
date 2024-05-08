import { TAllCourses } from "@/types/all_courses";
interface TimeSlot {
    day: string;
    startTime: string;
    endTime: string;
}
function convertToDateTime(day: string, time: string): Date {
    const [hours, minutesPart] = time.split(':');
    const minutes = minutesPart.substring(0, 2);
    const ampm = minutesPart.substring(3);
    const date = new Date();
    date.setHours(ampm === 'PM' && parseInt(hours) !== 12 ? parseInt(hours) % 12 + 12 : parseInt(hours), parseInt(minutes), 0);
    const dayOffset = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(day);
    date.setDate(date.getDate() + ((dayOffset - date.getDay() + 7) % 7));
    return date;
}

function isConflict(slot1: TimeSlot, slot2: TimeSlot): boolean {
    const start1 = convertToDateTime(slot1.day, slot1.startTime);
    const end1 = convertToDateTime(slot1.day, slot1.endTime);
    const start2 = convertToDateTime(slot2.day, slot2.startTime);
    const end2 = convertToDateTime(slot2.day, slot2.endTime);
    return start1 < end2 && start2 < end1;
}

export function generateSchedules(courses: TAllCourses[]): TAllCourses[][] {
    const validSchedules: TAllCourses[][] = [];
    const currentSchedule: TAllCourses[] = [];

    function scheduleCourses(courseIndex: number) {
        if (courseIndex >= courses.length) {
            validSchedules.push([...currentSchedule]);
            return;
        }

        const course = courses[courseIndex];
        if (!course.section) return;

        sectionLoop:
        for (const section of course.section) {
            const sectionTimeSlots: TimeSlot[] = section.day.map(day => ({
                day: day,
                startTime: section.starttime,
                endTime: section.endtime
            }));

            if (!section.lab || section.lab.length === 0) {
                // Handle sections without labs
                if (checkConflict(sectionTimeSlots)) continue sectionLoop;
                currentSchedule.push({...course, section: [section]});
                scheduleCourses(courseIndex + 1);
                currentSchedule.pop();
            } else {
                // Handle sections with labs
                for (const lab of section.lab) {
                    const labTimeSlots: TimeSlot[] = lab.day.map(day => ({
                        day: day,
                        startTime: lab.starttime,
                        endTime: lab.endtime
                    }));
                    
                    if (checkConflict(sectionTimeSlots.concat(labTimeSlots))) continue;
                    
                    currentSchedule.push({...course, section: [{...section, lab: [lab]}]});
                    scheduleCourses(courseIndex + 1);
                    currentSchedule.pop();
                }
            }
        }
    }

    function checkConflict(timeSlots: TimeSlot[]): boolean {
        // Check all times in the current schedule for conflicts
        return currentSchedule.some(scheduledCourse =>
            scheduledCourse.section?.some(scheduledSection =>
                scheduledSection.day.map(day => ({
                    day: day,
                    startTime: scheduledSection.starttime,
                    endTime: scheduledSection.endtime
                })).concat(scheduledSection.lab?.flatMap(lab => lab.day.map(day => ({
                    day: day,
                    startTime: lab.starttime,
                    endTime: lab.endtime
                }))) || []).some(existingTimeSlot =>
                    timeSlots.some(timeSlot => isConflict(timeSlot, existingTimeSlot))
                )
            )
        );
    }

    scheduleCourses(0);
    return validSchedules;
}                    
