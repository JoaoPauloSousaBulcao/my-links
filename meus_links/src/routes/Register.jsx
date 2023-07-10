import React from 'react'
import NavbarLogin from '../components/NavbarLogin'
import FormCadastro from '../components/Forms/FormRegister'

const Register = () => {
    return (
        <div>
        <NavbarLogin/>
            <h1>Register</h1>
            <FormCadastro/>
        </div>
    )
}

export default Register