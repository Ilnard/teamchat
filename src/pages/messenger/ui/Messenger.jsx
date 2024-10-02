import Sidebar from 'widgets/sidebar'
import Chat from 'widgets/chat'
import ChatsItem from 'entities/chatsItem'
import chatsData from '../api/getUsersChats'

import './Messenger.css'

const Messenger = () => {

    return (
        <div className='messenger'>
            <Sidebar navItemComponent={ChatsItem} navItemsData={chatsData}/>
            <Chat/>
        </div>
    )
}

export default Messenger