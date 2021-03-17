import React,{useEffect ,useState , useContext} from "react";
import "./Chat.css";
import "../InforBar/Infobar";
import {AppContext} from "../../AppContext";
import io from "socket.io-client";
import InfoBar from "../InforBar/Infobar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import Header from "../Header/Header";
import Zoom from "react-reveal";


let socket;


const Chat=()=>{
    const{
        name , 
        room,
        setMessages,
        messages,
        message,
        setMessage
    }=useContext(AppContext);
    const ENDPOINT="https://mp-chat-app.herokuapp.com/";

    useEffect(()=>{
        socket = io(ENDPOINT);
        console.log(socket);
        socket.emit("join", { name, room },(error)=>{
            if(error){
                alert(error)
            }         
        });
        return()=>{
            socket.emit('disconnect');
            socket.off();
        }
    },[ENDPOINT , AppContext])


    useEffect(()=>{
        socket.on("message" , (message)=>{
            setMessages([...messages,message])
        })
    },[messages])

    const sendMessage=(e)=>{
        e.preventDefault();
        if(message){
            socket.emit("sendMessage",message,()=>setMessage(""));
        }
    }


    return(
        <div className="chat">
                <Header/>
            <Zoom>     
            <div className="chatbox">
                <InfoBar/>
                <Messages/>
                <Input sendMessage={sendMessage}/>
            </div>
            </Zoom> 
        </div>
    )
}
export default Chat;