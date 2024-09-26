import React from 'react';
import classes from './../Profiles.module.css';
const MyMessage = () => {

    const linkTextArea = React.createRef();
    const sendMessage = () =>{
        const text = linkTextArea.current.value
        if (text){
            alert(text);
        }else{
            alert('+++')
        }
    }

    return(
        <div className={classes.myMessage}>
            <input type="text" ref={linkTextArea} />
            <button onClick={sendMessage}>Send message</button>
        </div>
    )
}
export default MyMessage