import PropTypes from 'prop-types'

import './Avatar.css'

const Avatar = ({userName, userSurname, imageURL, imageWidthSize}) => {

    imageURL = imageURL ? imageURL : 'https://avatars.mds.yandex.net/i?id=331cb9fb3d4038e56188981fb4e19948_l-4880380-images-thumbs&n=13'
    imageWidthSize = imageWidthSize ? imageWidthSize + 'px' : '32px'

    const imageAlt = `Фон аккаунта ${userName} ${userSurname}`

    return (
        <div className='avatar' style={{ width: imageWidthSize }}>
            <img 
                src={imageURL}
                alt={imageAlt}
                className='avatar__image'
            />
        </div>
    )
}
Avatar.propTypes = {
    userName: PropTypes.string,
    userSurname: PropTypes.string,
    imageURL: PropTypes.string,
    imageAlt: PropTypes.string,
    imageWidthSize: PropTypes.number
}

export default Avatar