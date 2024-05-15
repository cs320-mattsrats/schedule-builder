'use client';
import { Task } from '@/types/courses';
import {FC} from 'react';
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
import { TClassBtn } from '../types';

  const CourseDescription: FC<TClassBtn> = ({task}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Card maxW='sm'>
            <Button size="md" onClick={onOpen} colorScheme={task.color}>{task.subject}{task.classNumber}</Button>
        </Card>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{task.subject} {task.classNumber} : {task.title}</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
                <strong>Instructor:</strong> {task.instructor}
            </ModalBody>

            <ModalBody>
              <strong>Meeting Times:</strong> {task.startTime} - {task.endTime}
            </ModalBody>

            <ModalBody>
              <strong>Locations</strong> {task.location}
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

export default CourseDescription;