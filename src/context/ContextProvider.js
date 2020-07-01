import React, { useState } from 'react';

export const Context = React.createContext(null);

const ContextProvider = ({ children }) => {
  const [context, setContext] = useState({
    menuOpen: false,
  })

  return (
    <Context.Provider value={{context, setContext}}>
      {children}
    </Context.Provider>
  )
};

export default ContextProvider;