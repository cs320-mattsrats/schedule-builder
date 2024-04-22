import { 
    ChakraProvider,
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
        <Box position="relative" h="20vh" p={12}>
          <Center>
          <Card >
          <CardHeader>
            <Heading>{props.course}</Heading>
          </CardHeader>
          <CardBody>
            {props.comment}
          </CardBody>
          {/* <CardFooter>
          </CardFooter> */}
        </Card>
          </Center>
        </Box>
      </ChakraProvider>
    );
}