import React from 'react'
import NavbarLogin from '../components/NavbarLogin'
import FormLogin from '../components/Forms/FormLogin'

const Login = () => {
    return (
        <div>
            <NavbarLogin/>
            <h1>Login</h1>
            <FormLogin/>
        </div>
    )
}

export default Login