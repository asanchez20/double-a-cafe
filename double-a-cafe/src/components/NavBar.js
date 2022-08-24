import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {
    return(
        <>
            <ul className='navbar'>
                <li><NavLink exact activeClassName="active" to='/' >Home</NavLink></li>
                <li><NavLink activeClassName="active" to='/menu'>Menu</NavLink></li>
                <li><NavLink activeClassName="active" to='/shop'>Shop Our Beans</NavLink></li>
            </ul> 
        </>
    )
}

export default NavBar;