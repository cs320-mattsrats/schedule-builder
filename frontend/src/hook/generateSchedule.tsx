import { TAllCourses } from "@/types/all_courses";
interface TimeSlot {
    day: string;
    startTime: string;
    endTime: string;
}
function convertToDateTime(day: string, time: string): Date {
    // Assuming time is in "HH:MM AM/PM" format
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
    // Simplified conflict checking, assuming all time slots are in the same week
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
        if (!course.section) return;  // Ensure that course has sections

        for (const section of course.section) {
            let sectionConflict = false;
            const sectionTimes: TimeSlot[] = section.day.map(day => ({
                day: day,
                startTime: section.starttime,
                endTime: section.endtime
            }));

            // Check for conflict with currently scheduled courses
            for (const cs of currentSchedule) {
                for (const csSection of cs.section || []) {
                    for (const csSectionTime of csSection.day.map(day => ({
                        day: day,
                        startTime: csSection.starttime,
                        endTime: csSection.endtime
                    }))) {
                        if (sectionTimes.some(st => isConflict(st, csSectionTime))) {
                            sectionConflict = true;
                            break;
                        }
                    }
                    if (sectionConflict) break;
                }
                if (sectionConflict) break;
            }

            if (!sectionConflict) {
                currentSchedule.push({...course, section: [section]});
                scheduleCourses(courseIndex + 1);
                currentSchedule.pop();
            }
        }
    }

    scheduleCourses(0);
    return validSchedules;
}
