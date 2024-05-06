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
import { TAllCourses } from '@/types/all_courses';

const SuggestCourses: FC<TNextCourseCard> = ({course, cart, addToCart}) => {

  const add = (value:TAllCourses) => {
    addToCart(value)
  }

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
          // onChange={add}
          // value={course}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SuggestCourses;