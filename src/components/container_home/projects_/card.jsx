import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import './project.css'

const  Proj_card =(props) =>{
    return(
        <div className="project_card_1">
            <img className="project_card_img" src={props.img} alt="Image is not found" />
            <p className="project_card_1_p">{props.title}</p>
            <div className="project_card_btn">
                <a className="project_card_1_btn_1" href={props.site}>Live Demo <LaunchRoundedIcon/> </a>
                <a className="project_card_btn_2" href={props.git}>Github <GitHubIcon/> </a>
            </div>
        </div>
        
    )
}

export default Proj_card;