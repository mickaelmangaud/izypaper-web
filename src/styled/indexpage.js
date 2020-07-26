import styled from 'styled-components';
import { PageWrapper } from './common';
import { background } from '../assets/images';

export const IndexPageWrapper = styled(PageWrapper)`
  background-color: ${({theme}) => theme.colors.primary};
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  color: white;
  background-image: url(${background});
  background-position: center center;
  background-size: cover;
  padding: 0;
`;

export const Section = styled.section`
  padding: 10%;
  display: flex;
  height: 100%;
  scroll-snap-align: start;
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 5%;
  }
`;

export const HeroSection = styled(Section)`
  .left {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 860px) {
        width: 100%;
        // margin-bottom: 42px;
      }
      img { 
        max-width: 90%;
        @media (max-width: 860px) {
          width: 75%;
        }
      }
    }

  .right {
    flex: 1;
    padding: 0 7%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 860px) {
      flex: 2;
      margin-bottom: 0;
      justify-content: flex-start;
      align-items: center;
      padding-top: 5%;  
    }
    
    .one-sentence {
      font-size: 2.5vw;
      text-align: left;
      margin-bottom: 5vw;
      @media (max-width: 860px) {
        font-size: 5vw;
        text-align: center;
        margin-bottom: 24px;
        width: 80%;
      }
    }

    .description {
      font-size: 1.4vw;
      text-align: left;
      font-family: 'Lato', sans-serif;
      margin-bottom: 5vw;
      @media (max-width: 860px) { 
        font-size: 4vw;
        position: relative;
        text-align: center;
        width: 85%;
        margin-bottom: 24px;
      };
    }
  }
`;

export const CallToAction = styled.button`
  align-self: center;
  font-weight: bold;
  padding: 20px 36px;
  border-radius: 40px;
  border:none;
  background-color: white;
  @media (max-width: 860px) { 
    width: 100%;
    margin: 24px;
  };

  a {
    color: ${({theme}) => theme.colors.primary};
    font-size: 1.2vw;
    text-decoration: none;
    @media (max-width: 860px) { 
      font-size: 3vw;
    };
  }
`;