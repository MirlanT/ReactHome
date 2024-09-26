import React from "react"
import classes from'./Main.module.css';
import Posts from './Posts/Posts'
import Mypost from "./Posts/Mypost/Mypost";
const Main = (props) =>{
    
    return(
        <div className={classes.main}>
        <img alt='logo' src='https://yaves.ru/_next/image?url=https%3A%2F%2Fyaves.ru%2Fbackend%2Fstorage%2Ffiles%2Fblogs%2F324%2F1686834447orcqMRl1zo0fcFZ0.jpg&w=3840&q=75'></img>

        <div className={classes.content}>
          <Mypost addPost={props.addPost}/>
          {props.data.map((element, index) => (
            <Posts url={element.url} like={element.like} post={element.text} key={index} postId={index} del={props.del}/>
          )
          )}
        </div>
      </div>
    )
}
export default Main