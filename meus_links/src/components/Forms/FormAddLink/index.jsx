import React, { useState } from 'react';
import axios from 'axios'

const FormAddLink = () => {

    const userIdLocal = localStorage.getItem('id')

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isPublic] = useState(true);
    const [userId] = useState(userIdLocal);


    const formSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.post(`https://usuarios.ronierlima.dev/users/${userIdLocal}/links`, {
        title,
        description,
        url,
        imageUrl,
        isPublic,
        userId : userIdLocal,
        });

        console.log(response.data); // Exemplo de como lidar com a resposta da API
        console.log(
          
        )

        // Resetar os campos após o envio
        setTitle('')
        setDescription('')
        setUrl('')
        setImageUrl('')

        
    } 
    catch (error) {
    console.error(error);
    // Lidar com erros de solicitação
    }

}





    const inputTitleChange = (event) => {
        setTitle(event.target.value);
      };
    
    const inputDescriptionChange = (event) => {
      setDescription(event.target.value);
    };
    
    const inputUrlChange = (event) => {
      setUrl(event.target.value);
    };

    const inputImageUrlChange = (event) => {
      setImageUrl(event.target.value);
    };
  
    






    return (
        <div>
          <header>
            <form onSubmit={formSubmit}>
              <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={inputTitleChange} />
              </div>
              <div>
                <label>Description:</label>
                <input type="text" value={description} onChange={inputDescriptionChange} />
              </div>
              <div>
                <label>Url:</label>
                <input type="text" value={url} onChange={inputUrlChange} />
              </div>
              <div>
                <label>ImageUrl:</label>
                <input type="text" value={imageUrl} onChange={inputImageUrlChange} />
              </div>
              
              <button type="submit">Adicionar</button>
            </form>
          </header>
        </div>
      );



}

export default FormAddLink