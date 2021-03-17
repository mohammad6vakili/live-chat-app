import React,{useContext} from 'react';
import "./Infobar.css";
import closeIcon from '../../Icons/closeIcon.png';
import onlineIcon from '../../Icons/onlineIcon.png';
import {AppContext} from "../../AppContext";


const InfoBar=()=>{

    const{
        room
    }=useContext(AppContext)

    return(
        <div className="infobar">
            <div className="left-container pl-2">
                <img className="pb-2" style={{width:"8px"}} src={onlineIcon} alt="online icon"/>
                <h6 className="text-white ml-2" style={{fontWeight:900}}>{room}</h6>
            </div>
            <div className="right-container">
                <a href="/"><img style={{width:"10px"}} className="pb-2 mr-2" src={closeIcon} alt="close icon"/></a>
            </div>
        </div>
    )
}
export default InfoBar;