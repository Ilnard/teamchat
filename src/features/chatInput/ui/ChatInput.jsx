import {useState} from "react"
import PropTypes from "prop-types"

import Button from 'entities/button'
import ClipIcon from "shared/assets/clipIcon"
import SendIcon from "shared/assets/sendIcon"
import {useSendMessageMutation} from "shared/api/chatsAPI"

import './ChatInput.css'

const ChatInput = ({toUserId}) => {

    const [message, setMessage] = useState('')
    const [sendMessage] = useSendMessageMutation()

    const sendMessageOnClick = () => {
        sendMessage({fromUserId: 15, toUserId: toUserId, message})
    }

    return (
        <div className="interface-component chat-input-component">
            <input className="chat-input" type="text" placeholder="Введите сообщение"
                   onChange={(e) => setMessage(e.target.value)}/>
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