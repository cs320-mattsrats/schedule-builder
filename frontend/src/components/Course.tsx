import { SimpleGrid, Card, CardBody, CardHeader, Heading, Text, CardFooter, Button } from "@chakra-ui/react";

export default function Course(props:any) {  
    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
              <Card>
                <CardHeader>
                  <Heading size='md'> {props.courseTitle} </Heading>
                </CardHeader>
                <CardBody>
                  <Text> {props.courseDescription} </Text>
                </CardBody>
                <CardFooter>
                  <Button>View here</Button>
                </CardFooter>
              </Card>
            </SimpleGrid>
    );
}