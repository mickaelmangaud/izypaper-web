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
      <Section>
        <h1>2ème Section</h1>
      </Section>
      <Section>
        <h1>3ème Section</h1>
      </Section>
      <Section>
        <h1>4ème (soyons fous)</h1>
      </Section>
    </IndexPageWrapper>
  )
};

export default Index;
