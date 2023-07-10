import axios from 'axios';

const api = axios.create({
  baseURL: ' https://usuarios.ronierlima.dev/', // Substitua pela URL base da sua API
});

// Intercepta todas as requisições e adiciona o token no cabeçalho
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
