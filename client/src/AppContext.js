import React,{useState , useEffect} from 'react';


export const AppContext = React.createContext();


export const AppProvider = (props) =>{

// -------------------------------------------states------------------------------------
    const [name , setName]=useState('');
    const [room , setRoom]=useState('');
    const [message , setMessage]=useState("");
    const [messages , setMessages]=useState([]);


// ---------------------------------------get input values------------------------------
    const getNameValue=(e)=>{
        setName(e.target.value);
    }

    const getRoomValue=(e)=>{
        setRoom(e.target.value);
    }

    const getMessageValue=(e)=>{
        setMessage(e.target.value);
    }

// ------------------------------------------provider------------------------------------
    const value = {
        name,
        room,
        getNameValue,
        getRoomValue,
        message,
        messages,
        setMessage,
        setMessages,
        getMessageValue
    }


    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}