import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getHome = () => httpClient.get('/');

export const createUser = (values) => httpClient.post('/users', values);
