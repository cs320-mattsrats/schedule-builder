import React, {FC} from 'react';
import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Heading, 
    Text, 
    Button
} from '@chakra-ui/react';
import { TNextCourseCard } from '../types';

const SuggestCourses: FC<TNextCourseCard> = ({course, cart, addToCart}) => {

  return (
    <Card>
      <CardHeader>
        <Heading size="sm">{course.subject} {course.classNumber}</Heading>
      </CardHeader>
      <CardBody>
            <Text>{course.title}</Text>
      </CardBody>
      <CardFooter>
        <Button 
          variant='ghost' colorScheme='blue' 
          onClick={() => addToCart(course)}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SuggestCourses;