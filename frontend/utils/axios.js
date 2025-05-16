import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
});

API.interceptors.request.use(req => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const login = data => API.post('/user/login', data);
export const signup = data => API.post('/user/signup', data);
