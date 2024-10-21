import PropTypes from 'prop-types'
import Avatar from 'entities/avatar'

import './MiniProfile.css'

const MiniProfile = ({userName, userSurname, imageURL, imageAlt, imageWidthSize}) => {

    userName = userName ? userName : 'unknown'

    return (
        <div className='mini-profile'>
            <p>{userName} {userSurname}</p>
            <Avatar
                userName={userName}
                userSurname={userSurname}
                imageURL={imageURL}
                imageAlt={imageAlt}
                imageWidthSize={imageWidthSize}
            />
        </div>
        
    )
}

MiniProfile.propTypes = {
    userName: PropTypes.string,
    userSurname: PropTypes.string,
    imageURL: PropTypes.string,
    imageAlt: PropTypes.string,
    imageWidthSize: PropTypes.number
}

export default MiniProfile