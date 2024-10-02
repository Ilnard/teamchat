// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from 'app/router'

import './index.css'
import './theme.css'

createRoot(document.getElementById('root')).render(

<RouterProvider router={router}/>

)
