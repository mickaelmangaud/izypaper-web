import React from 'react';
import { IndexPageWrapper } from '../styled';
import styled from 'styled-components';
import { scene } from '../assets/images';

const HeroSection = styled.section`
  margin: 5%;
  display: flex;

  .left {
      flex: 1;
      img { width: 80% }
    }

  .right {
    flex: 1;
    padding: 3% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1 {
      font-size: 6vw;
      margin-bottom: 36px;
    }

    .description {
      font-size: 24px;
      font-family: 'Nunito Sans', sans-serif;
      margin-bottom: 24px;
      max-width:595px;
    }
  }
`;

const CallToAction = styled.button`
  padding: 12px 18px;
  border-radius: 5px;
  border:none;
  font-size: 1.5vw;
  color: ${({theme}) => theme.colors.primary};
`;

export const Index = () => {

  return (
    <IndexPageWrapper>
      <HeroSection>
        <div className="left">
          <img src={scene} />
        </div>
        <div className="right">
          <h1>IzyPaper</h1>
          <p className="description">Le service juridique et administratif des entrepreneurs expatriés. Nous vous accompagnons dans vos démarches d'expatriation en France et dans l'espace OHADA</p>
          <CallToAction>
            Créer mon entreprise au pays
          </CallToAction>
        </div>
      </HeroSection>
    </IndexPageWrapper>
  )
};

export default Index;
