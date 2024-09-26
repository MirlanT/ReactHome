import React from "react";
import classes from './Posts.module.css';



const Posts = (props) =>{

    const Delete = () =>{
        props.del(props.postId)
    }


    return(
        <div className={classes.block_Posts}>
            <img className="postimg" src={props.url} alt="PostLogo" />
            <span>{props.post}</span>
            <span>{props.like}</span>
            <button onClick={ Delete }>delete</button>
        </div>
    )
}

export default Posts