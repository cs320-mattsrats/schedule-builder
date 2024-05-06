import { TAllCourses } from "@/types/all_courses";
import { TCourse } from "@/types/courses";

// Function to choose random objects
export function getRandomCourses(list: TCourse[], numObjects: number): TCourse[] {
  const randomObjects: TCourse[] = [];

  // Generate random indices and add corresponding objects to the result array
  for (let i = 0; i < numObjects; i++) {
    const randomIndex: number = Math.floor(Math.random() * list.length);
    
    randomObjects.push(list[randomIndex]);
  }

  return randomObjects;
}

export function getRandomScheduleCourses(list: TAllCourses[], numObjects: number): TAllCourses[] {
  const randomObjects: TAllCourses[] = [];

  // Generate random indices and add corresponding objects to the result array
  for (let i = 0; i < numObjects; i++) {
    const randomIndex: number = Math.floor(Math.random() * list.length);
    
    randomObjects.push(list[randomIndex]);
  }

  return randomObjects;
}

