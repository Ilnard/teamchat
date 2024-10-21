import PropTypes from 'prop-types'

import Avatar from 'entities/avatar'
import {useGetLastMessageQuery} from "shared/api/chatsAPI"
import {useSelector} from "react-redux"

import './ChatsItem.css'

const ChatsItem = ({
                       chatsItemData = {
                           user: {
                               id: null,
                               name: null,
                               surname: null,
                               avatarUrl: null
                           }
                       }
                   }) => {

    if (!chatsItemData) throw new Error("navItems is undefined")

    const currentUser = useSelector(state => state.currentUser)

    const {data} = useGetLastMessageQuery({fromUserId: currentUser.id, toUserId: chatsItemData.user.id})
    const message = data && data['data'] ? data.data : { id: null, fromUserId: null, toUserId: null, message: null }

    const correctMessageOutput = (message) => {
        if (!message.fromUserId) return
        if (message.fromUserId === currentUser.id) {
            return (
                <>
                    <span className='chats-item__me'>Вы: </span>
                    {message.message}
                </>
            )
        } else {
            return message.message
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
                <p className="chats-item__message">{correctMessageOutput(message)}</p>
            </div>
        </div>
    )
}

ChatsItem.propTypes = {
    chatsItemData: PropTypes.object
}

export default ChatsItem