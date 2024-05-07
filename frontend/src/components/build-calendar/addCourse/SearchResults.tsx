import React, {FC, useState} from 'react';
import { 
    Heading, 
    Text, 
    Box,
    IconButton
} from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';
import { TNextCourseCard } from '../types';

const SearchResults: FC<TNextCourseCard> = ({course, cart, addToCart}) => {

  return (
    <div>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          {course.subject} {course.classNumber}
        </Heading>
        <Text pt='2' fontSize='sm'>
          {course.title}
        </Text>
        <IconButton
            variant='outline'
            aria-label='Add Course'
            size='sm'
            colorScheme='blue'
            icon={<SmallAddIcon />}
            // onChange={() => addToCart(course)}
            onClick={() => addToCart(course)}
        />
      </Box>
    </div>
  )
}

export default SearchResults