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
          <h1 className="one-sentence">
            Le service juridique et administratif des entrepreneurs expatriés
          </h1>
          <p className="description">
          Nous vous accompagnons dans vos démarches d’expatriation en France et en Afrique 
          </p>
          <CallToAction>
            <a href="https://app.izypaper.com/creer-mon-entreprise">Je crée mon entreprise au pays</a>
          </CallToAction>
        </div>
      </HeroSection>
    </IndexPageWrapper>
  )
};

export default Index;
