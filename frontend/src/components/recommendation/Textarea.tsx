import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react'

import { Text, Textarea } from '@chakra-ui/react'

export default function Comment(props:any) {  
    return (
      <>
        <Text mb='12px'> Write a comment: {props.course}</Text>
        <FormControl>
        <Input type='email' />
        <FormHelperText>Post a comment about this course!</FormHelperText>
        </FormControl>
      </>
    )
  }
