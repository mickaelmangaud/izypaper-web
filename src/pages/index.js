import React from 'react';
import { IndexPageWrapper, HeroSection, CallToAction } from '../styled';
import { scene } from '../assets/images';

export const Index = () => {
  return (
    <IndexPageWrapper>
      <HeroSection>
        <div className="left">
          <img src={scene} alt="hero-scene"/>
        </div>
        <div className="right">
          <h1>IzyPaper</h1>
          <p className="description">
            Le service juridique et administratif des entrepreneurs expatriés. 
            Nous vous accompagnons dans vos démarches d'expatriation en France
            et en Afrique
          </p>
          <CallToAction>
            Créer mon entreprise au pays
          </CallToAction>
        </div>
      </HeroSection>
    </IndexPageWrapper>
  )
};

export default Index;
