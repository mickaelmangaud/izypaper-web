import React, { useState } from 'react';
import { PageWrapper } from '../styled';

const Register = () => {
  const [error, setError] = useState(null);
  const [formFields, updateFormFields] = useState({
    email: '',
    password: ''
  });
  const updateInput = e => updateFormFields({ ...formFields, [e.target.name]: e.target.value})
  
  const register = async (e) => {
    e.preventDefault();
    fetch('https://izypaper-api.herokuapp.com/auth/register', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email: formFields.email, 
        password: formFields.password
      })
    })
      .then(response => response.json())
      .then(({ error, message }) => {
        setError(null)
        setError(message)
        if (error) {
          console.log(error)
          setError(error.message)
        }
      })
      .catch(error => console.log('error', error))
  }

  return (
    <PageWrapper>
      <form onSubmit={register}>
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

export default Register;