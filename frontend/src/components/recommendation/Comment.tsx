// FIXME: Be able to display the text of the comment maybe?
export default function Comment(props:any) {  
    return (
        <div style={
            {
                height: props.height, 
                width: props.width, 
                backgroundColor: props.color,
                borderRadius: "50%"
                }
            }
        >
        </div>
        // <p style = {{backgroundColor: props.color}}>Hi!</p>
    );
}