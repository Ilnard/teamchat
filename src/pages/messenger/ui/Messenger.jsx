import Sidebar from 'widgets/sidebar'
import Chat from 'widgets/chat'
import ChatsItem from 'entities/chatsItem'
import { useGetChatsQuery } from 'shared/api/chatsAPI.js'
import {socket} from "shared/api/socket"

import './Messenger.css'
import {useEffect} from "react";
import {useSelector} from "react-redux";


const Messenger = () => {

    const currentUser = useSelector(state => state.currentUser)

    useEffect(() => {
        socket.connect()
        socket.emit('join', currentUser.id)
    }, [currentUser])


    const { data } = useGetChatsQuery()
    return (
        <div className='messenger'>
            <Sidebar navItemComponent={ChatsItem} navItemsData={data}/>
            <Chat/>
        </div>
    )
}

export default Messenger