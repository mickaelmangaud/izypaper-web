import React from 'react';
import { IndexPageWrapper } from '../styled';
import styled from 'styled-components';
import { scene } from '../assets/images';

const HeroSection = styled.section`
  margin: 5%;
  display: flex;

  .left {
      @media (max-width: 860px) {
        display: none;
      }
      flex: 1;
      img { 
        width: 95%;
      }
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
      @media (max-width: 860px) {
        font-size: 16vw;
      }
    }

    .description {
      font-size: 2vw;
      font-family: 'Raleway', sans-serif;
      font-weight: 300;
      line-height: 2.5vw;
      margin-bottom: 4vw;
      max-width:595px;
      @media (max-width: 860px) {
        font-size: 6vw;
        line-height: 7vw;
      }
    }
  }
`;

const CallToAction = styled.button`
  padding: 16px 24px;
  border-radius: 40px;
  border:none;
  font-size: 1.5vw;
  color: ${({theme}) => theme.colors.primary};
`;

export const Index = () => {
  return (
    <IndexPageWrapper>
      <HeroSection>
        <div className="left">
          <img src={scene} alt="hero-scene"/>
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
