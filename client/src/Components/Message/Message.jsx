import React,{useContext , useState , useEffect} from 'react';
import { AppContext } from '../../AppContext';
import "./Message.css";
import ReactEmoji from "react-emoji";
import {Popconfirm , message} from "antd";

const Message = ({ message: { text, user } }) => {

    const{
        name,
        messages,
        setMessages
    }=useContext(AppContext)
    
    let isSentByCurrentUser = false;
  
    const trimmedName = name.trim().toLowerCase();
    if(user === trimmedName) {
      isSentByCurrentUser = true;
    }

    const removeMessageHandler=(text)=>{
      message.success("Message was Removed!")
      setMessages(
      messages.filter((item)=>item.text!==text)
      )
    }

    return(
        isSentByCurrentUser
        ? (
          <div className="messageContainer justifyEnd">
            <p className="sentText pr-10">{trimmedName}</p>
            <div className="messageBox backgroundBlue d-flex align-items-center">
              <Popconfirm
              title="This message is just delete for you are you sure to delete message?"
              onConfirm={()=>removeMessageHandler(text)}
              okText="Remove"
              cancelText="Cancel"
              >
                <button className="remove-message">
                  <i className="fa fa-trash-o"></i>
                </button>
              </Popconfirm>
              <span className="messageText colorWhite">{ReactEmoji.emojify(text)}</span>
            </div>
          </div>
          )
          : (
            <div className="messageContainer justifyStart">
              <div className="messageBox backgroundLight">
                <span className="messageText colorDark">{ReactEmoji.emojify(text)}</span>
              </div>
              <p className="sentText pl-10 ">{user}</p>
            </div>
          )
    )
}
export default Message;