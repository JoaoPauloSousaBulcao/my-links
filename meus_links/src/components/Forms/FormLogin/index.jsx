import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    function SaveToken(data) {
        
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', data.user.name)
        
        localStorage.setItem('id', data.user.id)
    }

    const redirectHome = () => {
        console.log('redirecionado')
        return navigate("/home")
    }


    const formSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.post('https://usuarios.ronierlima.dev/auth/login', {
        email,
        password,
        });

        console.log(response.data); // Exemplo de como lidar com a resposta da API

        // Resetar os campos após o envio
        setEmail('');
        setPassword('');
        SaveToken(response.data)
        redirectHome()


    } 
    catch (error) {
    console.error(error);
    // Lidar com erros de solicitação
    }

}





    
      const inputEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const inputPasswordChange = (event) => {
        setPassword(event.target.value);
      };






    return (
        <div>
          <header>
            <form onSubmit={formSubmit}>
              <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={inputEmailChange} />
              </div>
              <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={inputPasswordChange} />
              </div>
              <button type="submit">Login</button>
            </form>
          </header>
        </div>
      );



}

export default FormLogin