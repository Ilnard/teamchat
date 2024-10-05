import Avatar from 'entities/avatar'
import PropTypes from "prop-types";

import './ChatUser.css'

const ChatUser = ({userName, userSurname, imageURL, imageWidthSize}) => {

    return (
        <div className="interface-component chat-user">
            <Avatar
                userName={userName}
                userSurname={userSurname}
                imageURL={imageURL}
                imageWidthSize={imageWidthSize}
            />
            <div className="chat-user__fullname">{ userName } { userSurname }</div>
        </div>
    )
}

ChatUser.propTypes = {
    userName: PropTypes.string,
    userSurname: PropTypes.string,
    imageURL: PropTypes.string,
    imageAlt: PropTypes.string,
    imageWidthSize: PropTypes.number,
}

export default ChatUser