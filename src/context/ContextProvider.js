import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import { navigate } from 'gatsby';

export const UserContext = React.createContext(null);

const UserContextProvider = ({ children }) => {
  const [context, setContext] = useState({
    isAuthenticated: false,
    user: null,
    error: null,
  });

  useEffect(() => {
    const getUserData = async () => {
      fetch('http://localhost:5000/auth/user', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => {
        console.log('data.user', data)
        if (data.user) {
          setContext({ ...context, user: data.user, isAuthenticated: true });
        } else {
          setContext({ ...context, user: null, isAuthenticated: false });
        }
      })
      .catch(error => console.log('error', error))
    };

    getUserData();
  }, []);

  return (
    <UserContext.Provider value={{context, setContext}}>
      {children}
    </UserContext.Provider>
  )
};

export default UserContextProvider;