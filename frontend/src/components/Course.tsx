import { SimpleGrid, Card, CardBody, CardHeader, Heading, Text, CardFooter, Button, Box, Stack, StackDivider } from "@chakra-ui/react";

export default function Course(props:any) {  
    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
              <Card>
                <CardHeader pb={0}>
                  <Heading size='md'>{props.courseTitle}</Heading>
                </CardHeader>
                <CardBody>
                  <Text>{props.professor}</Text>
                  <Stack divider={<StackDivider />}>
                    <Box>
                    <SimpleGrid columns={2} spacing={0}>
                      <Text>{props.type1}</Text>
                      <Text>{props.location1}</Text>
                      <Text>{props.days1}</Text>
                      <Text>{props.time1}</Text>
                    </SimpleGrid>
                    </Box>

                    <Box>
                    <SimpleGrid columns={2} spacing={0}>
                      <Text>{props.days2}</Text>
                      <Text>{props.location2}</Text>
                      <Text>{props.time2}</Text>
                      <Text>{props.type2}</Text>
                    </SimpleGrid>
                    </Box>
                    
                    <Box>
                      <Text>{props.courseDescription}</Text>
                    </Box>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Button>View here</Button>
                </CardFooter>
              </Card>
            </SimpleGrid>
    );
}