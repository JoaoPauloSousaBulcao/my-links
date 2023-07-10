import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const name = localStorage.getItem('user')
    return (
        <div>
            {/* <h1>Navbar</h1> */}
            <h3>{name}</h3>
            <Link className='nav-link' to="/home">My Links</Link>
            <Link className='nav-link' to="/home/users-list">Users List</Link>
            <Link className='nav-link' to="/home/adiction-link">Adicionar Link</Link>
            {/* <Link to="/home/links-user">Links User</Link> */}
        </div>
    )
}

export default Navbar