import React from "react";
import './index.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Social = ()=>{
    return(
        <div className="media ">
            <div className="media_card">
                <a href="https://www.instagram.com/dhanushd6/profilecard/?igsh=MW4zYms0NDR2eThxeg=="><InstagramIcon sx={{ color: 'white'}} /></a>
                <a href="https://www.instagram.com/dhanushd6/profilecard/?igsh=MW4zYms0NDR2eThxeg==">Instagram</a>
            </div>
            <div className="media_card" >
                <a href="https://github.com/Dhanushnofficial"><GitHubIcon sx={{ color: 'white'}} /></a>
                <a href="https://github.com/Dhanushnofficial">Git-Hub</a>
            </div>
            <div className="media_card">
                <a href="https://www.linkedin.com/in/dhanush-n-7b6917266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedInIcon sx={{ color: 'white'}}/></a>
                <a href="https://www.linkedin.com/in/dhanush-n-7b6917266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">Linkedin</a>
            </div>
        </div>
    )
}



export default Social;