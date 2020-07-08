import React, { useContext } from 'react';
import { PanelWrapper } from './styled';
import { UserContext } from '../../../context';
import axios from 'axios';

const Panel = ({ isVisible, setIsPanelVisible, user }) => {
  const { context, setContext } = useContext(UserContext);
  const closePanel = () => setIsPanelVisible(false);
  
  const logout = async () => {
    await axios.get(`${process.env.GATSBY_BASE_API_URL}/auth/logout`, { withCredentials: true });
    setContext({ ...context, user: null, isAuthenticated: false });
  }

  return (
    <PanelWrapper isVisible={isVisible}>
      <div className="content">
        <span className="material-icons cross" onClick={closePanel}>
          close
        </span>
        Bienvenue {user.email}
        <p onClick={logout}>Déconnexion</p>
      </div>
    </PanelWrapper>
  )
};

export default Panel;