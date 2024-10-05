import {useParams} from "react-router-dom"
import {useGetChatQuery} from "shared/api/getChatsDataAPI";

import ChatUser from 'entities/chatUser/';

import './Chat.css'

const Chat = () => {
    let chatUserId = useParams().id
    let user = {
        name: null,
        surname: null,
        avatarUrl: null,
        imageWidthSize: 48
    }

    if (!chatUserId) {
        chatUserId = null
    }
    const { data } = useGetChatQuery(chatUserId)
    if (data && 'user' in data) user = data.user
    return (
        <div className="chat">
            <ChatUser
                userName={user.name}
                userSurname={user.surname}
                imageURL={user.avatarUrl}
                imageWidthSize={48}
            />
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