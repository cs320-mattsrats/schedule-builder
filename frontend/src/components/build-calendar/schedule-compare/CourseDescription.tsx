import { Popover, PopoverTrigger, PopoverContent, Box, Text } from '@chakra-ui/react';

interface CourseDescriptionProps {
  courseInfo: string;  // Adjust based on what info you want to show
}

const CourseDescription: React.FC<CourseDescriptionProps> = ({ courseInfo }) => (
  <Popover placement="right" trigger="hover">
    <PopoverTrigger>
      <Box>
        <Text>Details</Text>
      </Box>
    </PopoverTrigger>
    <PopoverContent p={4}>
      <Text>{courseInfo}</Text>
    </PopoverContent>
  </Popover>
);

export default CourseDescription;
