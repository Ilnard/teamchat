// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from 'app/router'
import { Provider } from "react-redux"
import { store } from 'app/store'

import './index.css'
import './theme.css'

createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <RouterProvider router={router}/>
</Provider>
)
