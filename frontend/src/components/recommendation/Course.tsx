import { Card, CardBody, CardHeader, Heading, Text, Button, CardFooter } from "@chakra-ui/react";
import Description from "./Description";

export default function Course(props: any) {
  return (
    <Card>
    <CardHeader>
    <Heading size="md">{props.courseTitle}</Heading>
    </CardHeader>
    <CardBody>
      <Text>Professor: {props.professor}</Text>
      <Text>Description: {props.courseDescription}</Text>
    </CardBody>
    <CardFooter>
      <Description courseTitle = {props.courseTitle} moreDetails = {props.courseMoreDetails} courseDescription = {props.courseDescription}/>
    </CardFooter>
  </Card>
  );
}