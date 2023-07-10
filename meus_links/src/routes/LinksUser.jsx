import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ListaLinks from '../components/LinksUser'
import api from '../components/ApiAxios'
import { Link } from 'react-router-dom'

const LinksUser = () => {

    const {id} = useParams();

    const [data, setData] = useState([]);

  useEffect(() => {
    // Exemplo de uma requisição GET autenticada
    api.get(`/users/${id}/links`)
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });
  }, []);
    

    return (
        <div>
            <h1>{id}</h1>
            {/* <ListaLinks idUser={id}/> */}
            <ul>
               {data.map((item) => {
                return (
                    <li className='links-user-itens'>
                      <div className='links-user-list-row'>
                        <img src={item.imageUrl}/>
                        <div className='links-user-list-text'>
                          <h2>{item.title}</h2>
                        <h4>{item.description}</h4>
                        link: <a href={item.url} target='_blank'>{item.url}</a>
                        </div>
                        
                      </div>
                      
                        
                    </li>
                )
            })} 
            </ul>
            {/* <h2>/users/{id}/links</h2> */}
            
            
        </div>
    )
}

export default LinksUser