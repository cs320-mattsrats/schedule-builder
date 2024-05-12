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
  } from '@chakra-ui/react'

  export default function CourseDescription(props: any) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button size="xs" onClick={onOpen}>View Details</Button>
  
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