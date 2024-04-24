import { Card, CardBody, CardHeader, Heading, Text, Button, CardFooter } from "@chakra-ui/react";

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
    <Button>View Details</Button>
    </CardFooter>
  </Card>
  );
}
