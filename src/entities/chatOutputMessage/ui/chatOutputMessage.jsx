import clsx from "clsx";
import PropTypes from "prop-types"
import {useSelector} from "react-redux"

import './chatOutputMessage.css'


const ChatOutputMessage = ({messageData}) => {

    const currentUser = useSelector(state => state.currentUser)

    function transformDateToHM(date) {
        const newDate = new Date(date + ' UTC')
        const Hours = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours()
        const Minutes = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes()
        return `${Hours}:${Minutes}`
    }

    return (
        <div className={clsx('message-wrapper', {'message-wrapper-from': messageData.fromUserId === currentUser.id})}>
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