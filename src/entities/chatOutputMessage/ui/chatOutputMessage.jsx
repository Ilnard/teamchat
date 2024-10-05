import clsx from "clsx";
import PropTypes from "prop-types"

import './chatOutputMessage.css'

const ChatOutputMessage = ({messageData}) => {

    function transformDateToHM(date) {
        const newDate = new Date(date + ' UTC')
        // return `${newDate.getHours()}-${newDate.getMinutes()}`
        return `${newDate.getHours()}:${newDate.getMinutes()}`
    }

    return (
        <div className={clsx('message-wrapper', {'message-wrapper-from': messageData.fromUserId === 15})}>
            <div className="message">
                <div className="message__time">{transformDateToHM(messageData.createdAt)}</div>
                <div className="message__message-wrapper">
                    <p className="message__message">{messageData.message}</p>
                </div>
            </div>
        </div>
    )
}

ChatOutputMessage.propTypes = {
    messageData: PropTypes.object
}

export default ChatOutputMessage