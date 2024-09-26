import React from "react"
import { NavLink } from "react-router-dom"

const User = (props) =>{
    return(
        <div>
            <NavLink>{props.name}</NavLink>
        </div>
    )
}
export default User