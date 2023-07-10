import React, { useEffect, useState } from 'react';
import api from '../ApiAxios'
// import LinksList from '../../pages/links';
// import UserLinkList from '../UserLinkList';
import { Link } from 'react-router-dom';

const ListaLinks = (idUser) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Exemplo de uma requisição GET autenticada
    api.get(`/users/${idUser}/links`)
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
       <h1>teste</h1>
        <ul>
            {data.map(link => {
                
                return (
                    <li key={link}>
                        <Link to={link}>{link}</Link>
                        <h3>teste</h3>
                        
                    </li>
                )
            })}
        </ul>
      
    </div>
  );
};

export default ListaLinks;