import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

import SignInForm from "features/signInForm"
import {useLoginMutation} from "shared/api/authAPI"
import AuthNotification from 'entities/authNotification'


const Login = () => {

    const [userLogin, setUserLogin] = useState('')
    const [userPass, setUserPass] = useState('')

    const [login, {data: response = {
        message: '',
        errors: []
    }}] = useLoginMutation()

    const updateLogin = (login) => {
        setUserLogin(login)
    }

    const updatePass = (pass) => {
        setUserPass(pass)
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (response.status) {
            localStorage.setItem("access_token", response.accessToken)
            navigate('/')
        }
    }, [response, navigate]);

    const showNotification = () => {
        if (response.message) return <AuthNotification errors={response.errors} message={response.message} />
    }

    const formSubmit = (e) => {
        e.preventDefault()
        console.log('fs')
        login({
            login: userLogin,
            pass: userPass,
        })
    }

    return (
        <div className="sign">
            <svg className='sign-bg-elem top' width="1043"
                 height="213" viewBox="0 0 1043 213"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M451 135.5C279.4 198.3 78.8333 211.333 0 210V-49.5H1040.5C1040.5 8.5 981 64.2671 855 56.5C676 45.4658 589 84.9965 451 135.5Z"
                    strokeWidth="5"/>
            </svg>
            <svg className='sign-bg-elem bottom' width="845"
                 height="166" viewBox="0 0 845 166"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M264.911 8.81558C42.5107 23.2156 -1.92257 128.649 3.41077 177.816L853.911 177.316C821.577 166.149 728.611 128.216 667.411 77.8156C590.911 14.8156 542.911 -9.18442 264.911 8.81558Z"
                    strokeWidth="5"/>
            </svg>

            <form action="" className="sign-form" spellCheck="false" onSubmit={(e) => formSubmit(e)}>
                <div className="sign-form__slides">
                    <SignInForm
                        updateLogin={updateLogin}
                        updatePass={updatePass}
                    />
                </div>
            </form>
            {showNotification()}
        </div>
    )
}

export default Login