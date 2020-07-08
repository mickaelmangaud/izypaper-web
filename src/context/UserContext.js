import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UiContext } from '../context';

export const UserContext = React.createContext(null);

const UserContextProvider = ({ children }) => {
  const { uiContext, setUiContext } = useContext(UiContext);
  const [context, setContext] = useState({
    isAuthenticated: false,
    user: null,
    error: null,
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data: { user } } = await axios.get(`${process.env.GATSBY_BASE_API_URL}/auth/user`, { withCredentials: true });
        setContext(context => ({ ...context, user: user, isAuthenticated: true, error: null }));
      } catch (err) {
        setContext(context => ({ ...context, user: null, isAuthenticated: false, error: err.message }));
      }
    };
    setUiContext({ ...uiContext, loaderDisplayed: true })
    getUserData();
    setTimeout(() => {
      setUiContext({ ...uiContext, loaderDisplayed: false })
    }, 800);
  }, []);

  return (
    <UserContext.Provider value={{context, setContext}}>
      {children}
    </UserContext.Provider>
  )
};

export default UserContextProvider;