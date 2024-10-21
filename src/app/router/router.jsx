import { createBrowserRouter } from "react-router-dom"

import App from 'app/App'
import Messenger from 'pages/messenger'
import Registration from 'pages/registration'
import Login from 'pages/login'
import Chat from 'widgets/chat'

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <Messenger/>,
                children: [
                    {
                        path: 'chat/:id',
                        element: <Chat/>,
                    }
                ]
            },
        ]
    },
    {
        path: '/registration',
        element: <Registration/>
    },
    {
        path: '/login',
        element: <Login/>
    }
]

const router = createBrowserRouter(routes)

export { router }