import {useRef, useEffect, useState} from 'react'
import clsx from "clsx"
import {useNavigate} from "react-router-dom"

import {useRegistrationMutation} from "shared/api/authAPI";
import SignUpFormNameSurname from 'features/signUpFormNameSurname'
import SignUpFormPassCode from 'features/signUpFormPassCode'
import AuthNotification from 'entities/authNotification'

const Registration = () => {

    const navigate = useNavigate()

    const [userName, setUserName] = useState('')
    const [userLogin, setUserLogin] = useState('')
    const [userPass, setUserPass] = useState('')
    const [userCode, setUserCode] = useState('')

    const updateUserName = (name) => {
        setUserName(name)
    }
    const updateLogin = (login) => {
        setUserLogin(login)
    }
    const updateUserPass = (password) => {
        setUserPass(password)
    }
    const updateUserCode = (code) => {
        setUserCode(code)
    }

    const [registration, {data: response = {
        message: null,
        errors: []
    }}] = useRegistrationMutation()

    useEffect(() => {
        if (response.status) {
            localStorage.setItem("access_token", response.accessToken)
            navigate('/')
        }
    }, [response, navigate]);

    const formSubmit = (e) => {
        e.preventDefault()
        registration({
            fullName: userName,
            login: userLogin,
            pass: userPass,
            code: userCode
        })
    }

    const showNotification = () => {
        if (response.message) return <AuthNotification errors={response.errors} message={response.message} />
    }

    const stepFormSlider = 50
    const [currentSlideFromSlider, setCurrentSlideFromSlider] = useState(0)

    const formSlidesRef = useRef(null)

    useEffect(() => {
        formSlidesRef.current.style.width = '200vw'
    }, [])

    const formSlider = (direction) => {
        switch (direction) {
            case 'next': {
                setCurrentSlideFromSlider(currentSlideFromSlider - stepFormSlider)
                break
            }
            case 'prev': {
                setCurrentSlideFromSlider(currentSlideFromSlider + stepFormSlider)
                break
            }
        }
    }

    return (
        <div className="sign">
            <svg className={clsx('sign-bg-elem top', {'active': currentSlideFromSlider === 0})} width="1043"
                 height="213" viewBox="0 0 1043 213"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M451 135.5C279.4 198.3 78.8333 211.333 0 210V-49.5H1040.5C1040.5 8.5 981 64.2671 855 56.5C676 45.4658 589 84.9965 451 135.5Z"
                    strokeWidth="5"/>
            </svg>
            <svg className={clsx('sign-bg-elem bottom', {'active': currentSlideFromSlider === -50})} width="845"
                 height="166" viewBox="0 0 845 166"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M264.911 8.81558C42.5107 23.2156 -1.92257 128.649 3.41077 177.816L853.911 177.316C821.577 166.149 728.611 128.216 667.411 77.8156C590.911 14.8156 542.911 -9.18442 264.911 8.81558Z"
                    strokeWidth="5"/>
            </svg>

            <form action="" className="sign-form" spellCheck="false" onSubmit={(e) => formSubmit(e)}>
                <div className="sign-form__slides" style={{transform: `translateX(${currentSlideFromSlider}%)`}}
                     ref={formSlidesRef}>
                    <SignUpFormNameSurname
                        next={() => formSlider('next')}
                        updateUserName={updateUserName}
                        updateLogin={updateLogin}/>
                    <SignUpFormPassCode
                        prev={() => formSlider('prev')}
                        updateUserPass={updateUserPass}
                        updateUserCode={updateUserCode}/>
                </div>
            </form>
            {showNotification()}
        </div>
    )
}

export default Registration