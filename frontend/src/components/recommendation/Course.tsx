import { Card, CardBody, CardHeader, Heading, Text, Button, CardFooter } from "@chakra-ui/react";
import Description from "./Description";
import CourseComment from "./CourseComment";
import { TCourseCard } from "./types";
import React, { FC,useState } from "react";
import showLimitedWords from "@/hook/showLimitedWords";

const Course: FC<TCourseCard> = ({course}) => {

  course = { ...course, "brief": showLimitedWords(course.description, 10) };

  return (
    <Card>
      <CardHeader>
        <Heading size="md">{course.id}: {course.title}</Heading>
      </CardHeader>
      <CardBody>
        {/* <Text>Professor: {course.title}</Text> */}
        <Text>Description: {course.brief}</Text>
      </CardBody>
      <CardFooter>
        <Description courseTitle = {course.title} courseDescription = {course.description}/>
        <CourseComment courseTitle = {course.title} key = {course._id} > </CourseComment>
      </CardFooter>
    </Card>
  );
}

export default Course;
