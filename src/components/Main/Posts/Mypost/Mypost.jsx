import React from "react";
import classes from './Mypost.module.css';
const Mypost = (props) => {

    const linkRef = React.createRef();
    const addPost = () =>{
        const valTextArea = linkRef.current.value
        props.addPost(valTextArea);

    }
    return(
        <div className={classes.myPost}>
            <textarea name="text" id="post" ref={linkRef}></textarea>
            <button onClick={ addPost }>Send</button>
        </div>
    )
}

export default Mypost