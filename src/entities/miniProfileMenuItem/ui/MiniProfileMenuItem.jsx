import PropTypes from "prop-types"
import {NavLink} from "react-router-dom"

import './MiniProfileMenuItem.css'

const MiniProfileMenuItem = ({dataItem}) => {

    if (dataItem.pathTo) return (
        <li className="dropdown-item">
            <NavLink to={dataItem.pathTo}>
                <div className="dropdown-item__container">
                    {dataItem.icon({color: dataItem.iconColor})}
                    <span className='dropdown-item__name' style={{'color': dataItem.nameColor}}>{dataItem.name}</span>
                </div>
            </NavLink>
        </li>
    )
    else return (
        <li className="dropdown-item">
            <button onClick={() => dataItem.method()} className="dropdown-item__container">
                {dataItem.icon({color: dataItem.iconColor})}
                <span className='dropdown-item__name' style={{'color': dataItem.nameColor}}>{dataItem.name}</span>
            </button>
        </li>
    )
}

MiniProfileMenuItem.propTypes = {
    dataItem: PropTypes.object
}

export default MiniProfileMenuItem