import {useParams} from "react-router-dom"
import {useGetChatQuery} from 'shared/api/chatsAPI'

import ChatUser from 'entities/chatUser'
import ChatOutput from 'features/chatOutput'
import ChatInput from "features/chatInput"

import './Chat.css'

const Chat = () => {
    let chatUserId = Number(useParams().id)
    let user = {
        id: null,
        name: null,
        surname: null,
        avatarUrl: null,
        imageWidthSize: 48
    }
    let messages = []

    if (!chatUserId) {
        chatUserId = null
    }
    const { data } = useGetChatQuery({fromUserId: 15, toUserId: chatUserId})
    if (data && 'user' in data) user = data.user
    if (data && 'messages' in data) messages = data.messages

    return (
        <div className="chat">
            <ChatUser
                userName={user.name}
                userSurname={user.surname}
                imageURL={user.avatarUrl}
                imageWidthSize={48}
            />
            <ChatOutput messagesData={messages} />
            <ChatInput toUserId={chatUserId}/>
        </div>
    )
}

export default Chat