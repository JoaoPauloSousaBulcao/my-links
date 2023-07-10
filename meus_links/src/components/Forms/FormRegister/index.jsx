import React, { useState } from 'react';
import axios from 'axios'

const FormCadastro = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const formSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.post('https://usuarios.ronierlima.dev/users', {
        name,
        email,
        password,
        });

        console.log(response.data); // Exemplo de como lidar com a resposta da API

        // Resetar os campos após o envio
        setName('');
        setEmail('');
        setPassword('');
        
    } 
    catch (error) {
    console.error(error);
    // Lidar com erros de solicitação
    }

}





    const inputNameChange = (event) => {
        setName(event.target.value);
      };
    
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
                <label>Name:</label>
                <input type="text" value={name} onChange={inputNameChange} />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={inputEmailChange} />
              </div>
              <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={inputPasswordChange} />
              </div>
              <button type="submit">Cadastrar</button>
            </form>
          </header>
        </div>
      );



}

export default FormCadastro