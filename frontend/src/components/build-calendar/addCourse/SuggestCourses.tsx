import React, {FC} from 'react';
import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Heading, 
    Text
} from '@chakra-ui/react';
import { TCourseCard } from '@/components/recommendation/types';

const SuggestCourses: FC<TCourseCard> = ({course}) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="sm">{course.id}</Heading>
      </CardHeader>
      <CardBody>
        {/* <Text>Professor: {course.title}</Text> */}
            <Text>Description: {course.description}</Text>
      </CardBody>
    </Card>
  )
}

export default SuggestCourses;