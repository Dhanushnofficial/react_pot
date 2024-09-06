import React from "react";
import './index.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Social = ()=>{
    return(
        <div className="media ">
            <div className="media_card">
                <InstagramIcon sx={{ color: 'white'}} />
                <a href="">Instagram</a>
            </div>
            <div className="media_card">
                <GitHubIcon sx={{ color: 'white'}}/>
                <a href="">Git-Hub</a>
            </div>
            <div className="media_card">
                <LinkedInIcon sx={{ color: 'white'}}/>
                <a href="">Linkedin</a>
            </div>
        </div>
    )
}



export default Social;