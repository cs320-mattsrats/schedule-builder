import { TAllCourses } from "@/types/all_courses";

export type TNextCourseCard = {
    course: TAllCourses,
    cart: TAllCourses[],
    addToCart: Function
}

export type TAddToCard = {
    cart: TAllCourses[],
    addToCart: Function
}