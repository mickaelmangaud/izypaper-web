import React, { useState } from 'react';

export const UiContext = React.createContext(null);

const UiContextProvider = ({ children }) => {
  const [uiContext, setUiContext] = useState({
    loaderDisplayed: false
  });

  console.log('UICONTEXT', uiContext);

  return (
    <UiContext.Provider value={{uiContext, setUiContext}}>
      {children}
    </UiContext.Provider>
  )
};

export default UiContextProvider;