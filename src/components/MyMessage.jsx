// "my" message bubble
const MyMessage = ({message}) => {
    // checking if image is sent
    if(message?.attachments?.length > 0){
        return (
            <img
            src={message.attachments[0].file}
            alt="message-attachments"
            className = "message-image"
            style = {{float: 'right'}}
            />
            
        )

    }
    // if no image found return text
    return (
        <div className="message" style={{float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50'}}> 
            {message.text}
        </div>

    );


}

// Functional component 
export default MyMessage;