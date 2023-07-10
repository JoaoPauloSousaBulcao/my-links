import React from 'react'
import { Link } from 'react-router-dom'
import ListaUsuarios from '../components/UsersList'

const UsersList = () => {
    return (
        <div>
            <h1>Users List</h1>

            <ListaUsuarios/>
            {/* <Link to="/home/users-list/1">Usuario 01</Link>
            
            <Link to="/home/users-list/2">Usuario 02</Link>
            
            <Link to="/home/users-list/3">Usuario 03</Link> */}
        </div>
    )
}

export default UsersList