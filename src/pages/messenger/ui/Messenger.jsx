import Sidebar from 'widgets/sidebar'
import Chat from 'widgets/chat'
import ChatsItem from 'entities/chatsItem'
import { useGetChatsQuery } from 'shared/api/chatsAPI.js'

import './Messenger.css'

const Messenger = () => {

    const { data } = useGetChatsQuery()

    return (
        <div className='messenger'>
            <Sidebar navItemComponent={ChatsItem} navItemsData={data}/>
            <Chat/>
        </div>
    )
}

export default Messenger