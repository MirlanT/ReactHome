import React from "react";
import classes from './Profiles.module.css';
import Mess from './Message/Message';
import User from './User/User';
import MyMessage from "./MyMessage/MyMessage";



const Profiles = (props) =>{
    return(
        <div className={classes.profilesBlock}>
            <div className="profile">
                {props.name.map((ele) => (
                    <User name={ele.name} key={ele.id}/>
                ))
            }
            </div>
            <div className="message">
                <MyMessage />
                {props.message.map((mess) => (
                    <Mess message={mess.message} key={mess.id}/>
                ))}
            </div>
        </div>
    )
}
export default Profiles