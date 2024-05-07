import React, {useEffect, useRef, useState} from 'react'
import {
    Button,
    Wrap,
    WrapItem, 
    Flex,
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    SimpleGrid,
    Grid,
    GridItem,
  } from '@chakra-ui/react'
  import { 
    CloseIcon, 
    AddIcon,
  } from '@chakra-ui/icons';
import { SearchBar } from '../addCourse/SearchBar';
import { mock_next_courses } from '@/mock/courses_with_schedule';
import SuggestCourses from '../addCourse/SuggestCourses';
import { useRouter } from "next/navigation";
import SearchResults from '../addCourse/SearchResults';
import { getRandomScheduleCourses } from '@/hook/getRandomCourses';
import { TAllCourses } from '@/types/all_courses';


const Watchlist = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef(null)
    const finalRef = useRef(null);
    const router = useRouter();

    const rec_courses = getRandomScheduleCourses(mock_next_courses, 4);

    const [cart, setCart] = useState<TAllCourses[]>([]);

    const addToCart = (course: TAllCourses) => {
        setCart((prevCartItems) => [...prevCartItems, course]);
        // console.log(cart)
    }

    const removeFromCart = (id: string) => {
        const updatedCart = cart.filter(product => product.id !== id);
        setCart(updatedCart);
      };

    useEffect(() => {
        console.log('haha',cart)
    },[cart]);

    return (
        <Flex flexDirection={"column"} gap="2">
            <Flex minWidth='max-content' alignItems='center' gap='3' justifyContent={"flex-end"}>
            <Button colorScheme='pink'>Generate</Button>
            </Flex>
            <Wrap spacing={4} alignItems='center'>
            {cart ? (
                <>
                {cart.map((item, index) => (
                    <WrapItem key={index}>
                        <Button colorScheme='teal' rightIcon={<CloseIcon boxSize={3}/>} onClick={() => removeFromCart(item.id)}>{item.subject} {item.classNumber}</Button>
                    </WrapItem>
                ))}
                </>
                ): (
                    <></>
                )
            }
            <WrapItem>
                <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='Call Sage'
                fontSize='20px'
                w="150px"
                icon={<AddIcon />}
                onClick={onOpen}
                />
            </WrapItem>
            </Wrap>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                size = "6xl"
            >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Search Classes</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <Grid templateColumns='repeat(11, 1fr)' gap={4}>
                    <GridItem colSpan={6} gap={2}>
                        <SearchBar cart = {cart} addToCart = {addToCart}/>
                    </GridItem>
                    <GridItem colSpan={5}>
                            <SimpleGrid columns={2} spacing={5}>
                            {rec_courses.map((course, index) => (
                                <SuggestCourses
                                    key = {index} 
                                    course = {course}
                                    cart = {cart}
                                    addToCart = {addToCart}
                                />
                            ))} 
                            </SimpleGrid>
                    </GridItem>
                    <GridItem>
                        <Button colorScheme='linkedin' onClick={() => {router.push("/recommendation")}}>Recommendation Page</Button>
                    </GridItem>
                </Grid>
            </ModalBody>
            </ModalContent>
        </Modal>
        </Flex>
    )
}

export default Watchlist