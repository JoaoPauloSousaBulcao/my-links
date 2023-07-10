import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const NavbarLogin = () => {
    return (
        <div>
            {/* <h1>NavbarLogin</h1> */}
            <Link className='nav-link' to="/">Login</Link>
            
            <Link className='nav-link' to="/register">Cadastro</Link>
        </div>
    )
}

export default NavbarLogin