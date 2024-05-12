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
    Card,
  } from '@chakra-ui/react'

  export default function CourseDescription(props: any) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Card maxW='sm'>
            <Button size="md" onClick={onOpen} variant='ghost'>CS320</Button>
        </Card>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>courseTitle</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
                <strong>Course Description:</strong> Description
            </ModalBody>

            <ModalBody>
              <strong>Meeting Times:</strong> Times
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }