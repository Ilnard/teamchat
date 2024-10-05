import PropTypes from "prop-types"

import './Button.css'

const Button = ({children, widthSize, heightSize, onClick}) => {
    return (
        <button className="button" type="button" style={{width: widthSize + 'px', height: heightSize + 'px'}} onClick={onClick}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.object,
    widthSize: PropTypes.number,
    heightSize: PropTypes.number,
    onClick: PropTypes.func,
}

export default Button