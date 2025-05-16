import axios from 'axios';

const API = axios.create({
  baseURL: 'https://task-management-backend-ehcv.onrender.com/api',
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
