import Avatar from 'entities/avatar'
import PropTypes from "prop-types";

const ChatUser = ({userName, userSurname, imageURL, imageAlt, imageWidthSize}) => {

    return (
        <div className="interface-component chat-user">
            <Avatar
                userName={userName}
                userSurname={userSurname}
                imageURL={imageURL}
                imageAlt={imageAlt}
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