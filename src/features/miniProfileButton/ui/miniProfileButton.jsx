import { useState } from 'react'
import PropTypes from 'prop-types'

import MiniProfile from 'entities/miniProfile'
import DropdownIcon from 'shared/ui/DropdownIcon'

import './MiniProfileButton.css'

const MiniProfileButton = ({name, surname}) => {
    const [isActive, setIsActive] = useState(false)

    const onClick = () => {
        setIsActive(!isActive)
    }

    return (
        <button type='button' className='mini-profile-button' onClick={onClick}>
            <MiniProfile
                name={name}
                surname={surname}
            />
            <DropdownIcon isActive={isActive}/>
        </button>
    )
}

MiniProfileButton.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string
}

export default MiniProfileButton