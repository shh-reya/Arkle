import React from "react";
import { colors } from "@mui/material";

function Profile({title,body}){
    return(
        <div className="profile-container" style={{padding:'20px'}}>
            <div style={{ paddingBottom:'5%',textAlign:'center'}}><i class="fa-solid fa-user"></i>  {title}</div>
            <div>{body}</div>
        </div>
    )

}

export default Profile; 