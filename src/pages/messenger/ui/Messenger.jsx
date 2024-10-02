import Sidebar from 'widgets/sidebar'
import Chat from 'widgets/chat'
import ChatsItem from 'entities/chatsItem'
import chatsData from '../api/getUsersChats'
// import { NavLink } from 'react-router-dom'

import './Messenger.css'

const Messenger = () => {

    return (
        <div className='messenger'>
            <Sidebar navItemComponent={ChatsItem} navItemsData={chatsData}/>
            <Chat/>
        </div>
        // <div className="interface-component">
        //     messenger content
        // </div>
    )
}

export default Messenger