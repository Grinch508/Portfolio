import React from 'react' 
import { NavLink } from 'react-router-dom'
import './NavLinks.css'

function NavLinks() {
        return <ul className='nav-list'>
            <li className='nav-item'>
                <NavLink to='/' exact>EXPLORE</NavLink>
            </li>

            <li className='nav-item'>
                <NavLink to='/stack'>TECH STACK</NavLink>
            </li>

            <li className='nav-item'>
                <NavLink to='/projects'>PROJECTS</NavLink>
            </li>
        </ul>
    
}

export default NavLinks