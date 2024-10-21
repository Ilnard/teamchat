import {useState, useEffect} from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"

import Button from 'entities/button'
import ClipIcon from "shared/assets/clipIcon"
import SendIcon from "shared/assets/sendIcon"
import {apiChats, useSendMessageMutation} from "shared/api/chatsAPI"
import {useSelector} from "react-redux"
import {socket} from "shared/api/socket"

import './ChatInput.css'

const ChatInput = ({toUserId}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        socket.connect()
    }, []);

    const [message, setMessage] = useState('')
    const [sendMessage] = useSendMessageMutation()

    const currentUser = useSelector(state => state.currentUser)

    const sendMessageOnClick = () => {
        sendMessage({fromUserId: currentUser.id, toUserId, message})
        socket.emit('send message', {
            fromUserId: currentUser.id,
            toUserId,
            message
        })
        dispatch(apiChats.util.updateQueryData('getChat', {fromUserId: currentUser.id, toUserId}, (draft) => {
            const messagesCount = draft.data.messages.length
            const lastMessageId = draft.data.messages[messagesCount - 1] ? draft.data.messages[messagesCount - 1].id : -1
            draft.data.messages.push({
                id: lastMessageId + 1,
                fromUserId: currentUser.id,
                toUserId: toUserId,
                createdAt: new Date().toUTCString(),
                updatedAt: new Date().toUTCString(),
                message: message
            })
        }))
        dispatch(apiChats.util.updateQueryData('getLastMessage', {fromUserId: currentUser.id, toUserId}, (draft) => {

            draft.data = {
                fromUserId: currentUser.id,
                toUserId: toUserId,
                message: message
            }
        }))
        setMessage('')
    }

    return (
        <div className="interface-component chat-input-component">
            <input className="chat-input" type="text" placeholder="Введите сообщение" value={message}
                   onChange={e => setMessage(e.target.value)}
                   onKeyDown={e => e.code === 'Enter' && sendMessageOnClick()}
            />
            {/*<Button>*/}
            {/*    <ClipIcon/>*/}
            {/*</Button>*/}
            <Button onClick={() => {
                if (message.length > 0) sendMessageOnClick()
            }}>
                <SendIcon/>
            </Button>
        </div>
    )
}

ChatInput.propTypes = {
    toUserId: PropTypes.number,
}

export default ChatInput