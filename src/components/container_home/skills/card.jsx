import React from "react";
import './skills.css'

const Card = (props) =>{
    return(
        <div className="Skills_card_1">
            <img className="skills_card_img" src={props.img} alt="Image not found"/>
            <h1 className="skills_card_h1">{props.title}</h1>
        </div>
    )
}

export default Card;