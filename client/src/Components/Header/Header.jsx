import React,{useContext , useState} from 'react';
import "./Header.css";
import {AppContext} from "../../AppContext";
import Fade from "react-reveal";
import Details from "../Details/Details";


const Header=()=>{

    const{
        name
    }=useContext(AppContext);

    const [isEmoji , setIsEmoji]=useState(false);

    const openEmojiHandler=()=>{
        setIsEmoji(!isEmoji)
    }

    
    return(
        <Fade top>
            <div className="header">

                <div className="emoji-open">
                    {isEmoji && <Details closeEmoji={setIsEmoji}/>}
                </div>
                <a href="/">
                    <button className="btn btn-outline-danger mr-5">Log Out</button>
                </a>
                <span className='username'>{name}</span>
                <button onClick={openEmojiHandler} className='open-emoji-button'>😀</button>
            </div>
        </Fade>
    )
}
export default Header;