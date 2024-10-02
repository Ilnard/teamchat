import PropTypes from 'prop-types'
import {NavLink} from "react-router-dom"

// import React from 'react'

import './Sidebar.css'

const Sidebar = ({navItemComponent: NavItemComponent, navItemsData = [], navItemsSpace = 10}) => {

    if (!NavItemComponent) throw new Error("Sidebar hasn't entity for list")

    const navLinks = navItemsData.map(item => {
        return (
            <li key={item.id}>
                <NavLink
                    to={item.path}
                    className={({
                                    isPending,
                                    isActive
                                }) => isPending ? 'nav-link_pending' : isActive ? 'nav-link_active' : ''}
                >
                    <NavItemComponent chatsItemData={item}/>
                </NavLink>
            </li>
        )
    })

    return (
        <div className="sidebar-wrapper">
            <div className='interface-component sidebar'>
                <nav>
                    <ul
                        className='sidebar-list'
                        style={{rowGap: navItemsSpace + 'px'}}
                    >{navLinks}</ul>
                </nav>
            </div>
        </div>
    )
}

Sidebar.propTypes = {
    navItemComponent: PropTypes.func,
    navItemsData: PropTypes.array,
    navItemsSpace: PropTypes.number
}

export default Sidebar