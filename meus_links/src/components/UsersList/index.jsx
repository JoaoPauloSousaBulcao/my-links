import React, { useEffect, useState } from 'react';
import api from '../ApiAxios'
// import LinksList from '../../pages/links';
// import UserLinkList from '../UserLinkList';
import { Link } from 'react-router-dom';

const UsersList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Exemplo de uma requisição GET autenticada
    api.get('/users')
      .then(response => {
        setData(response.data);
        // console.log(response.data)
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });
  }, []);

  const link = "/home/users-list/"

  return (
    <div>
        <ul>
            {data.map(user => {
                const id = user.id
                return (
                    <li key={user.id}>
                        <Link Name={user.name} to={`/home/users-list/${id}`}>{user.name}</Link>
                        
                    </li>
                )
            })}
        </ul>
      
    </div>
  );
};

export default UsersList;