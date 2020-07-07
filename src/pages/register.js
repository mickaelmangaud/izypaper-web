import React, { useState } from 'react';
import { PageWrapper } from '../styled';
import axios from 'axios';

const Register = () => {
  const [info, setInfo] = useState(null);
  const [formFields, updateFormFields] = useState({ email: '', password: '' });
  const updateInput = e => updateFormFields({ ...formFields, [e.target.name]: e.target.value });
  
  const register = async (e) => {
    e.preventDefault();
    setInfo(null);
    try {
      await axios.post(
        'http://localhost:5000/auth/register',
        formFields,
        { withCredentials: true }
      );
      setInfo(`Utilisateur créé avec l'adresse : ${formFields.email}`)
    } catch (err) {
      setInfo(err.message);
    }
  }

  return (
    <PageWrapper>
      <form onSubmit={register}>
        {info && <p>{info}</p>}
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