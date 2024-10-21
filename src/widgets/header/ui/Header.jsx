import {useEffect, useState} from "react"

import Logo from 'shared/ui/Logo'
import MiniProfileButton from 'features/MiniProfileButton'

import './Header.css'
import {useSelector} from "react-redux";


const Header = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const currentUser = useSelector(state => state.currentUser)
    useEffect(() => {
        setName(currentUser.name)
        setSurname(currentUser.surname)
    }, [currentUser])

    return (
        <header className='interface-component'>
            <Logo/>
            <MiniProfileButton
                userName={name}
                userSurname={surname}
            />
        </header>
    )
}

export default Header