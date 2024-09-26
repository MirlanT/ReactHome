import React from "react";
import { NavLink } from "react-router-dom";

const Mess = (props) =>{
    return(
        <div>
            <NavLink>{props.message}</NavLink>
        </div>
    )
}
export default Mess