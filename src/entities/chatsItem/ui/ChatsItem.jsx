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
                           messages: [
                               {
                                   id: null,
                                   from_user_id: null,
                                   to_user_id: null,
                                   createdAt: null,
                                   updatedAt: null,
                                   message: null
                               }
                           ]
                       }
                   }) => {

    if (!chatsItemData) throw new Error("navItems is undefined")

    const correctMessageOutput = () => {
        if (chatsItemData.messages[0].from_user_id === 15) {
            return (
                <>
                    <span className='chats-item__me'>Вы: </span>
                    {chatsItemData.messages[0].message}
                </>
            )
        } else {
            return chatsItemData.messages[0].message
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
                <p className="chats-item__message">{correctMessageOutput()}</p>
            </div>
        </div>
    )
}

ChatsItem.propTypes = {
    chatsItemData: PropTypes.object
}

export default ChatsItem