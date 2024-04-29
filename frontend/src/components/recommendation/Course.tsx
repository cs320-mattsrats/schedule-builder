import { Card, CardBody, CardHeader, Heading, Text, Button, CardFooter } from "@chakra-ui/react";
import Description from "./Description";
import { TCourseCard } from "./types";
import React, { FC,useState } from "react";

const Course: FC<TCourseCard> = ({course}) => {
  return (
    <Card>
    <CardHeader>
    <Heading size="md">{course.title}</Heading>
    </CardHeader>
    <CardBody>
      {/* <Text>Professor: {course.professor}</Text> */}
      <Text>Description: {course.description}</Text>
    </CardBody>
    <CardFooter>
      <Description courseTitle = {course.title} courseDescription = {course.description}/>
    </CardFooter>
  </Card>
  );
}

export default Course;
