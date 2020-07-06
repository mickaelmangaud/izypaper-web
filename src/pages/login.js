import React, { useState, useContext } from 'react';
import { PageWrapper } from '../styled';
import fetch from 'isomorphic-fetch';
import { UserContext } from '../context';
import { navigate } from 'gatsby';

const Login = () => {
  const { context, setContext } = useContext(UserContext);
  const [formFields, updateFormFields] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  
  const updateInput = e => updateFormFields({ ...formFields, [e.target.name]: e.target.value});

  const login = (e) => {
    e.preventDefault();
    fetch('https://izypaper-api.herokuapp.com/auth/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: formFields.email, password: formFields.password }),
      credentials: 'include'
    })
      .then(response => response.json())
      .then(({error, user}) => {
        if (error) setError(error.message)
        else {
          setError(null);
          setContext({ ...context, user, isAuthenticated: true})
          navigate('/');
        }
      })
      .catch(error => console.log('error', error))
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