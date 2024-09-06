import React from "react";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import WebIcon from '@mui/icons-material/Web';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import './list.css'

function List(){
    return(
        <div className="list_card">
            <ul>
                <li><WebIcon sx={{ fontSize: 20 }}/> Fornt-End Development </li>
                <li><DeveloperModeIcon sx={{ fontSize: 20 }}/> Back-End Development </li>
                <li><DesignServicesIcon  sx={{ fontSize: 18 }}/>UI Design </li>
            </ul>
        </div>
    )
}
export default List;