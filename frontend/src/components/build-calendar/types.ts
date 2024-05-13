import { TAllCourses } from "@/types/all_courses";
import { Task } from "@/types/courses";

export type TNextCourseCard = {
    course: TAllCourses,
    cart: TAllCourses[],
    addToCart: Function
}

export type TAddToCard = {
    cart: TAllCourses[],
    addToCart: Function
}

export type TClassBtn = {
    task: Task;
}

export type TPressed = {
    pressed: boolean,
    toggle: Function
}