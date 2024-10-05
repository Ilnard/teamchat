import PropTypes from "prop-types"

import ChatOutputMessage from "entities/chatOutputMessage"

import './ChatOutput.css'

const ChatOutput = ({messagesData = []}) => {

    const messages = messagesData.map((messageData) => {
        return <ChatOutputMessage key={messageData.id} messageData={messageData} />
    })

    return (
        <div className="interface-component chat-output">
            {messages}
        </div>
    )
}

ChatOutput.propTypes = {
    messagesData: PropTypes.array,
}

export default ChatOutput