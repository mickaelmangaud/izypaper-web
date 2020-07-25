import React from 'react';
import { IndexPageWrapper, HeroSection, CallToAction } from '../styled';
import { scene } from '../assets/images';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export const Index = () => {
  return (
    <IndexPageWrapper>
      <HeroSection>
        <div className="left">
          <img src={scene} alt="hero-scene"/>
        </div>

        <div className="right">
          <h1 className="one-sentence">
            Le service juridique et administratif des entrepreneurs étrangers et de la Diaspora
          </h1>

          <p className="description">
            Créez au pays et en France sans vous déplacer 
          </p>

          <CallToAction>
            <OutboundLink href="https://app.izypaper.com">
              Je crée mon entreprise au pays
            </OutboundLink>
          </CallToAction>
        </div>
      </HeroSection>
    </IndexPageWrapper>
  )
};

export default Index;
