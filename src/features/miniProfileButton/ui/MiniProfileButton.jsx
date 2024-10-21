import {useState} from 'react'
import PropTypes from 'prop-types'

import MiniProfile from 'entities/miniProfile'
import DropdownIcon from 'shared/ui/DropdownIcon'
import DropdownMenu from 'features/dropdownMenu'
import MiniProfileMenuItem from "entities/miniProfileMenuItem"
import {useLogoutMutation} from 'shared/api/authAPI'

import LogoutIcon from 'shared/ui/LogoutIcon'

import './MiniProfileButton.css'

const MiniProfileButton = ({userName, userSurname}) => {
    const [isActive, setIsActive] = useState(false)

    const onClick = () => {
        setIsActive(!isActive)
    }

    const [ logout ] = useLogoutMutation()

    const themeStyle = getComputedStyle(document.body)

    const dropdownData = [
        {
            icon: LogoutIcon,
            iconColor: themeStyle.getPropertyValue('--color-danger'),
            name: 'Выход',
            nameColor: themeStyle.getPropertyValue('--color-danger'),
            pathTo: '',
            method() {
                logout()
                localStorage.removeItem('access_token')
                window.location.reload()
            }
        }
    ]

    return (
        <div className="dropdown-wrapper">
            <button type='button' className='mini-profile-button' onClick={onClick}>
                <MiniProfile
                    userName={userName}
                    userSurname={userSurname}
                />
                <DropdownIcon isActive={isActive}/>
            </button>
            <DropdownMenu isActive={isActive} dropdownItem={MiniProfileMenuItem} dropdownData={dropdownData}/>
        </div>
    )
}

MiniProfileButton.propTypes = {
    userName: PropTypes.string,
    userSurname: PropTypes.string
}

export default MiniProfileButton