import React from 'react';
import { IndexPageWrapper, HeroSection, CallToAction, Section } from '../styled';
import { scene } from '../assets/images';

export const Index = () => {
  return (
    <IndexPageWrapper>
      <HeroSection>
        <div className="left">
          <img src={scene} alt="hero-scene"/>
        </div>
        <div className="right">
          <h1 className="one-sentence">
            Le service juridique et administratif des entrepreneurs expatriés
          </h1>
          <p className="description">
          Nous vous accompagnons dans vos démarches d’expatriation en France et en Afrique 
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
