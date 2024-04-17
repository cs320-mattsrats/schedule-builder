import { grid, SimpleGrid, Box } from "@chakra-ui/react";

export default function Course(props:any) {  
    return (
        <SimpleGrid columns={5} spacing={2}>
            <Box bg='tomato' height='200px'></Box>
            <Box bg='tomato' height='200px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>
        // <div style={
        //     {
        //         height: props.height, 
        //         width: props.width, 
        //         backgroundColor: props.color,
        //         }
        //     }
        // >
        // </div>
        // <p style = {{backgroundColor: props.color}}>Hi!</p>
    );
}