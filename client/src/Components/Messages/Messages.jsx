import React,{useContext} from 'react';
import "./Messages.css";
import {AppContext} from "../../AppContext";
import Message from "../Message/Message";

const Messages = () =>{

    const{
        messages
    }=useContext(AppContext)

    return(
        <div className="messages w-100 pb-5">
            {messages.map((message, i) => <div key={i}><Message message={message}/></div>)}
        </div>
    )
}
export default Messages;