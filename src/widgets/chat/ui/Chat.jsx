import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"

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

    const currentUser = useSelector(state => state.currentUser)

    const { data } = useGetChatQuery({fromUserId: currentUser.id, toUserId: chatUserId})
    if (data && 'user' in data.data) user = data.data.user
    if (data && 'messages' in data.data) messages = data.data.messages

    const showChatOutput = () => {
        if (chatUserId) return <ChatInput toUserId={chatUserId}/>
    }

    return (
        <div className="chat">
            <ChatUser
                userName={user.name}
                userSurname={user.surname}
                imageURL={user.avatarUrl}
                imageWidthSize={48}
            />
            <ChatOutput messagesData={messages} />
            {showChatOutput()}
        </div>
    )
}

export default Chat