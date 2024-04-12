import { grid } from "@chakra-ui/react";

export default function Course(props:any) {  
    return (
        <div style={
            {
                height: props.height, 
                width: props.width, 
                backgroundColor: props.color,
                }
            }
        >
        </div>
        // <p style = {{backgroundColor: props.color}}>Hi!</p>
    );
}