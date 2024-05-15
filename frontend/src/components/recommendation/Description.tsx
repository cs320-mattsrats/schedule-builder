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

  export default function Description(props: any) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button variant='solid' colorScheme='blue' onClick={onOpen}>View Details</Button>
  
        <Modal size='6xl' isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.courseTitle}</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
                <strong>Course Description:</strong> {props.courseDescription}
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