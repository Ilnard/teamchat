import {Outlet} from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {jwtDecode} from "jwt-decode"

import {setCurrentUser} from "app/userSlice/"
import Header from 'widgets/header'

import './App.css'
import {useEffect} from "react";


function App() {

    const token = localStorage.getItem('access_token')

    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (!token) {
            navigate('/login')
        } else {
            const userInfo = jwtDecode(token)
            dispatch(setCurrentUser(userInfo))
        }
    }, [dispatch, navigate, token])


    return (
        <div className='container'>
            <Header/>
            <div className="viewer-wrapper">
                <Outlet/>
            </div>

        </div>
    )
}

export default App
