import React,{useContext} from 'react';
import "./Details.css";
import {AppContext} from "../../AppContext";
import Fade from 'react-reveal';

const Details =({closeEmoji})=>{

    const{
        message,
        setMessage
    }=useContext(AppContext);

    return(
        <Fade top>
        <div className="detail-container">
            <button onClick={()=>setMessage(message + ":grinning:")} className="emoji-btn" >😀</button>
            <button onClick={()=>setMessage(message + ":smile:")} className="emoji-btn" >😄</button>
            <button onClick={()=>setMessage(message + ":grin:")} className="emoji-btn" >😁</button>
            <button onClick={()=>setMessage(message + ":laughing:")} className="emoji-btn" >😆</button>
            <button onClick={()=>setMessage(message + ":sweat_smile:")} className="emoji-btn" >😅</button>
            <button onClick={()=>setMessage(message + ":joy:")} className="emoji-btn" >😂</button>
            <button onClick={()=>setMessage(message + ":rofl:")} className="emoji-btn" >🤣</button>
            <button onClick={()=>setMessage(message + ":relaxed:")} className="emoji-btn" >☺️</button>
            <button onClick={()=>setMessage(message + ":blush:")} className="emoji-btn" >😊</button>
            <button onClick={()=>setMessage(message + ":innocent:")} className="emoji-btn" >😇</button>
            <button onClick={()=>setMessage(message + ":slightly_smiling_face:")} className="emoji-btn" >🙂</button>
            <button onClick={()=>setMessage(message + ":upside_down_face:")} className="emoji-btn" >🙃</button>
            <button onClick={()=>setMessage(message + ":wink:")} className="emoji-btn" >😉</button>
            <button onClick={()=>setMessage(message + ":relieved:")} className="emoji-btn" >😌</button>
            <button onClick={()=>setMessage(message + ":heart_eyes:")} className="emoji-btn" >😍</button>
            <button onClick={()=>setMessage(message + ":kissing_heart:")} className="emoji-btn" >😘</button>
            <button onClick={()=>setMessage(message + ":yum:")} className="emoji-btn" >😋</button>
            <button onClick={()=>setMessage(message + ":stuck_out_tongue_winking_eye:")} className="emoji-btn" >😜</button>
            <button onClick={()=>setMessage(message + ":stuck_out_tongue_closed_eyes:")} className="emoji-btn" >😝</button>
            <button onClick={()=>setMessage(message + ":money_mouth_face:")} className="emoji-btn" >🤑</button>
            <button onClick={()=>setMessage(message + ":sunglasses:")} className="emoji-btn" >😎</button>
            <button onClick={()=>setMessage(message + ":smirk:")} className="emoji-btn" >😏</button>
            <button onClick={()=>setMessage(message + ":unamused:")} className="emoji-btn" >😒</button>
            <button onClick={()=>setMessage(message + ":disappointed:")} className="emoji-btn" >😞</button>
            <button onClick={()=>setMessage(message + ":pensive:")} className="emoji-btn" >😔</button>
            <button onClick={()=>setMessage(message + ":confused:")} className="emoji-btn" >😕</button>
            <button onClick={()=>setMessage(message + ":persevere:")} className="emoji-btn" >😣</button>
            <button onClick={()=>setMessage(message + ":weary:")} className="emoji-btn" >😩</button>
            <button onClick={()=>setMessage(message + ":angry:")} className="emoji-btn" >😠</button>
            <button onClick={()=>setMessage(message + ":rage:")} className="emoji-btn" >😡</button>
            <button onClick={()=>setMessage(message + ":neutral_face:")} className="emoji-btn" >😐</button>
            <button onClick={()=>setMessage(message + ":no_mouth:")} className="emoji-btn" >😶</button>
            <button onClick={()=>setMessage(message + ":flushed:")} className="emoji-btn" >😳</button>
            <button onClick={()=>setMessage(message + ":scream:")} className="emoji-btn" >😱</button>
            <button onClick={()=>setMessage(message + ":cry:")} className="emoji-btn" >😢</button>
            <button onClick={()=>setMessage(message + ":sob:")} className="emoji-btn" >😭</button>
            <button onClick={()=>setMessage(message + ":sleeping:")} className="emoji-btn" >😴</button>
            <button onClick={()=>setMessage(message + ":thinking:")} className="emoji-btn" >🤔</button>
            <button onClick={()=>setMessage(message + ":zipper_mouth_face:")} className="emoji-btn" >🤐</button>
            <button onClick={()=>setMessage(message + ":face_with_thermometer:")} className="emoji-btn" >🤒</button>
            <button onClick={()=>setMessage(message + ":smiling_imp:")} className="emoji-btn" >😈</button>
            <button onClick={()=>setMessage(message + ":hankey:")} className="emoji-btn" >💩</button>
            <button onClick={()=>setMessage(message + ":running_man:")} className="emoji-btn" >🏃</button>
            <button onClick={()=>setMessage(message + ":man_facepalming:")} className="emoji-btn" >🤦‍♂</button>
            <button onClick={()=>setMessage(message + ":couple_with_heart_woman_man:")} className="emoji-btn" >💑</button>
            <button onClick={()=>setMessage(message + ":+1:")} className="emoji-btn" >👍</button>
            <button onClick={()=>setMessage(message + ":-1:")} className="emoji-btn" >👎</button>
            <button onClick={()=>setMessage(message + ":point_up_2:")} className="emoji-btn" >👆</button>
            <button onClick={()=>setMessage(message + ":point_down:")} className="emoji-btn" >👇</button>
            <button onClick={()=>setMessage(message + ":wave:")} className="emoji-btn" >👋</button>
            <div onClick={()=>closeEmoji(false)} className="close-emoji-button">
                <i class="fa fa-chevron-up"></i>
            </div>
        </div>
        </Fade>
    )
}
export default Details;