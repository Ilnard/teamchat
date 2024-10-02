import {useParams} from "react-router-dom";

import ChatUser from 'entities/chatUser/';

import './Chat.css'

const Chat = () => {
    const params = useParams()

    return (
        <div className="chat">
            <ChatUser imageWidthSize={48}/>
            <div className="interface-component">
                messages
            </div>
            <div className="interface-component">
                input message
            </div>
        </div>
    )
}

export default Chat