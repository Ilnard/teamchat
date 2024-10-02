import { createBrowserRouter } from "react-router-dom"

import App from 'app/App'
import Messenger from 'pages/messenger'

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <Messenger/>
            }
        ]
    }
]

const router = createBrowserRouter(routes)

export { router }