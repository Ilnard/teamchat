import PropTypes from 'prop-types'
import clsx from 'clsx'

import './DropdownIcon.css'

const DropdownIcon = ({isActive}) => {

    return (
        <svg className={clsx('dropdown-icon', {'dropdown-icon_active': isActive})} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_22_84" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_22_84)">
                <path d="M12 15L7 10H17L12 15Z" fill="#ADADAD" />
            </g>
        </svg>
    )
}

DropdownIcon.propTypes = {
    isActive: PropTypes.bool
}

export default DropdownIcon