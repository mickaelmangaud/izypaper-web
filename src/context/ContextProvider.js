import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';

export const UserContext = React.createContext(null);

const UserContextProvider = ({ children }) => {
  const [context, setContext] = useState({
    isAuthenticated: false,
    user: null,
    error: null,
  });

  useEffect(() => {
    const getUserData = async () => {
      fetch('https://izypaper-api.herokuapp.com/auth/user', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => {
        if (data.user) setContext(context => ({ ...context, user: data.user, isAuthenticated: true })) 
        else setContext(context => ({ ...context, user: null, isAuthenticated: false }));
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