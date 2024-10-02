import Avatar from 'entities/avatar'

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

export default ChatUser