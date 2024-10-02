import { createBrowserRouter } from "react-router-dom"

import App from 'app/App'
import Messenger from 'pages/messenger'
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
            }
        ]
    }
]

const router = createBrowserRouter(routes)

export { router }