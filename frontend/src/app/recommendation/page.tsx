'use client'

import Layout from "@/components/layout/Layout";
import {
  Text,
} from "@chakra-ui/react";

// [SYL-14] import recommendation page css file and components
import Course from '@/components/recommendation/Course'
import Comment from '@/components/recommendation/Comment'
import './page.css'

// TODO: Get multiple courses(placeholder) to show up
// TODO: Center courses
// TODO: Create comments section header("Student Feedback")
// TODO: Create comments section
// TODO: Add placeholder comments
export default function Recommendation() {
  return (
    <Layout>
      <div>
          <Text
            as={"span"}
            bgGradient={
              "linear(to-tr, brand.main, brand.200, brand.300, brand.400, brand.600)"
            }
            fontSize={{ md: "60px", sm: "6xl" }}
            fontWeight="extrabold"
          >
            Hot Courses
          </Text>

          <Course height = "300px" width = "250px" color = "red"></Course>
          <Text
            as={"span"}
            bgGradient={
              "linear(to-tr, brand.main, brand.200, brand.300, brand.400, brand.600)"
            }
            fontSize={{ md: "60px", sm: "6xl" }}
            fontWeight="extrabold"
          >
            Student Feedback
          </Text>
          <Comment height = "150px" width = "300px" color = "lightblue"></Comment>
          <div></div>
          <Comment height = "125px" width = "250px" color = "lavender"></Comment>

      </div>
    </Layout>
  );
}
