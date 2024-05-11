import { Text, Textarea } from '@chakra-ui/react'

export default function Comment(props:any) {  
    return (
      <>
        <Text mb='12px'>Course: {props.course}</Text>
        <Textarea
          value={props.course}
          placeholder={props.placeholder}
          size='lg'
        />
      </>
    )
  }