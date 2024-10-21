import PropTypes from "prop-types"

import './AuthNotification.css'

const AuthNotification = ({errors = [], message}) => {

    const translateErrorName = (errorName) => {
        switch (errorName) {
            case 'fullName': {
                return 'Имя и фамилия'
                break
            }
            case 'login': {
                return 'Логин'
                break
            }
            case 'pass': {
                return 'Пароль'
                break
            }
            case 'code': {
                return 'Код приглашения'
                break
            }
        }
    }

    const parseErrors = () => {
        return errors.map(error => <li className="notification-errors__error" key={error.name}><span className="c-accent"><b>{translateErrorName(error.name)}</b></span>: {error.message}</li>)
    }

    return (
        <div className="interface-component notification">
            <p className="notification-error">{message}</p>
            <ul className="notification-errors">
                {parseErrors()}
            </ul>
        </div>
    )
}

AuthNotification.propTypes = {
    errors: PropTypes.array,
    message: PropTypes.string
}

export default AuthNotification