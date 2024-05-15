import {
    ChakraProvider,
    Flex,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Center, 
    Text } from '@chakra-ui/react'
import theme from './theme';

// FIXME: Be able to display the text of the comment maybe?
export default function Comment(props:any) {  
    return (
        <ChakraProvider theme={theme}>
        <Box position="relative" transform={props.pos} p={12} fontSize='large'>
          <Center>
          <Card >
          <CardBody>
            {props.comment}
          </CardBody>
        </Card>
          </Center>
        </Box>
      </ChakraProvider>
    );
}