import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = React.createContext(null);

const UserContextProvider = ({ children }) => {
  const [context, setContext] = useState({
    isAuthenticated: false,
    user: null,
    error: null,
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data: { user } } = await axios.get('http://localhost:5000/auth/user', { withCredentials: true });
        setContext(context => ({ ...context, user: user, isAuthenticated: true, error: null }));
      } catch (err) {
        setContext(context => ({ ...context, user: null, isAuthenticated: false, error: err.message }));
      }
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