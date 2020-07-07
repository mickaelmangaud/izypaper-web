import React, { useState, useContext } from 'react';
import { PageWrapper } from '../styled';
import { UserContext } from '../context';
import { navigate } from 'gatsby';
import axios from 'axios';

const Login = () => {
  const { context, setContext } = useContext(UserContext);
  const [formFields, updateFormFields] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  
  const updateInput = e => updateFormFields({ ...formFields, [e.target.name]: e.target.value});

  const login = async e => {
    setError(null);
    e.preventDefault();
    try {
      setError(null);
      const response = await axios.post(
        'http://localhost:5000/auth/login', 
        formFields, 
        { withCredentials: true }
      );
      setContext({ ...context, user: response.data.user, isAuthenticated: true });
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <PageWrapper>
      { !!context.user && <p>{`${context.user.email}`}</p> }
      <form onSubmit={login}>
        {error && <p>{error}</p>}
        <input 
          type="email" 
          value={formFields.email} 
          name="email"
          onChange={updateInput}
        />
        <input
          type="password"
          value={formFields.password}
          name="password"
          onChange={updateInput}
        />
        <button>Register</button>
      </form>
    </PageWrapper>
  )
};

export default Login;