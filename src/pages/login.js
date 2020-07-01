import React, { useState } from 'react';
import { PageWrapper } from '../styled';
import axios from 'axios';
import { navigate } from 'gatsby';

const Login = () => {
  const [formFields, updateFormFields] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);

  const updateInput = e => updateFormFields({ ...formFields, [e.target.name]: e.target.value})

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://izypaper-backend.herokuapp.com/auth/login', formFields,{
        withCredentials: true,
      });
      console.log(response.status)
      setError(null);
      navigate('/')
      // Mettre le user dans le contexte
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <PageWrapper>
      <form onSubmit={submitLogin}>
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
        <button>Submit</button>
      </form>
    </PageWrapper>
  )
};

export default Login;