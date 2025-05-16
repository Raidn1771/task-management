import React, { useState } from 'react';
import { login } from '../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await login(formData);
      const token = data.token;
      localStorage.setItem('token', token);
      toast.success('Login successful!');

      const userRes = await axios.get('/api/user/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.setItem('user', JSON.stringify(userRes.data));

      e;
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={e =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account?{' '}
          <span onClick={() => navigate('/signup')}>Sign up here</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
