import { TCourseSchedule } from "./course_schedule";

export type TAllCourses = {
    id: string;
    classNumber: string;
    subject: string;
    title: string;
    section: TCourseSchedule[];
    color?: string;
}   