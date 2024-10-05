import PropTypes from 'prop-types'

import Avatar from 'entities/avatar'

import './ChatsItem.css'

const ChatsItem = ({
                       chatsItemData = {
                           user: {
                               id: null,
                               name: null,
                               surname: null,
                               avatarUrl: null
                           },
                           lastMessage: {
                               from_user_id: null,
                               to_user_id: null,
                               message: {
                                   id: null,
                                   value: null,
                                   replied: null,
                                   createdAt: null,
                                   updatedAt: null,
                               }
                           }
                       }
                   }) => {

    if (!chatsItemData) throw new Error("navItems is undefined")

    const prefixMe = () => {
        if (chatsItemData.lastMessage.from_user_id === 15) {
            return <span className='chats-item__me'>Вы:</span>
        } else {
            return null
        }
    }

    return (
        <div className="chats-item">
            <Avatar
                userName={chatsItemData.user.name}
                userSurname={chatsItemData.user.surname}
                imageURL={chatsItemData.user.avatarUrl}
                imageWidthSize={48}
            />
            <div className="chats-item__info">
                <p className="chats-item__username">{chatsItemData.user.name} {chatsItemData.user.surname}</p>
                <p className="chats-item__message">{prefixMe} {chatsItemData.lastMessage.message.value}</p>
            </div>
        </div>
    )
}

ChatsItem.propTypes = {
    chatsItemData: PropTypes.object
}

export default ChatsItem