import {useEffect, useRef} from "react"
import PropTypes from "prop-types"

import ChatOutputMessage from "entities/chatOutputMessage"

import './ChatOutput.css'

const ChatOutput = ({messagesData = []}) => {

    const chatOutputRef = useRef()

    useEffect(() => {
        chatOutputRef.current.scrollTop = chatOutputRef.current.scrollHeight
    }, [chatOutputRef, messagesData.length])

    const messages = messagesData.map((messageData) => {
        return <ChatOutputMessage key={messageData.id} messageData={messageData}/>
    })

    return (
        <div className="interface-component chat-output" ref={chatOutputRef}>
            {messages}
        </div>
    )
}

ChatOutput.propTypes = {
    messagesData: PropTypes.array,
}

export default ChatOutput