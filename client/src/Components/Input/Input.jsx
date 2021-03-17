import React,{useContext , useState} from "react";
import "./Input.css";
import {AppContext} from "../../AppContext";




const Input = ({sendMessage}) => {

    const {
        message,
        getMessageValue
    }=useContext(AppContext)

    const [isEmojiOpen , setIsEmojiOpen]=useState(false);

    const openEmojiHandler=()=>{
       setIsEmojiOpen(!isEmojiOpen)
    }


  return (
        <form onSubmit={sendMessage} className="input-wrapper">
                <input
                    className="Input-chat-message form-control"
                    type="text"
                    value={message} 
                    onChange={getMessageValue}
                    placeholder="Type a message..."
                    onKeyPress={e=>e.key === 'Enter' ? sendMessage(e) : null}
                    autoFocus
                />
                <button style={{borderRadius:0}} className="btn btn-primary btn-lg">Send</button>
        </form>
        );
};
export default Input;
