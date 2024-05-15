'use client';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Flex
  } from '@chakra-ui/react'
import React from 'react';
import Comment from './Comment';
import Textarea from './Textarea'

  export default function CourseComment(props: any) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let [value, setValue] = React.useState('')

            let handleInputChange = (e: string) => {
                let inputValue = e
                //add comment function
                setValue(inputValue)
                }
    return (
      <>
        <Button variant='outline' colorScheme='blue' onClick={onOpen}>Comments</Button>
  
        <Modal size='6xl' isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.courseTitle}</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
                <Textarea placeholder='Post a comment about this course!' onChange={handleInputChange} >
                </Textarea>
                <strong>Comments:</strong>
                
                {props.comments}
                {/* <Flex> */}
                <Comment comment="This class is the coolest!">
                </Comment>
                <div></div>
                <Comment comment="best class ever!">
                </Comment>
                <Comment comment="Lots of office hours, covers a lot of material">
                </Comment>
                <div></div>
                <Comment comment="lecture heavy course">
                </Comment>
                {/* </Flex> */}
            </ModalBody>
  
            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }