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
`;

export const HeroSection = styled(Section)`
  .left {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: ${({theme}) => theme.sizes.menuHeight};

      @media (max-width: 860px) {
        display: none;
      }
      img { 
        max-width: 90%;
      }
    }

  .right {
    flex: 1;
    padding-left: 5%;
    /* padding: 3% 0; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* margin-left: 48px; */
    margin-bottom: ${({theme}) => theme.sizes.menuHeight};
    @media (max-width: 860px) {
      justify-content: space-between;
      margin-bottom: 0;
    }
    
    .one-sentence {
      font-size: 2.5vw;
      text-align: left;
      margin-bottom: 24px;
      max-width: 75%;
      line-height: 58px;
      @media (max-width: 860px) {
        font-size: 16vw;
      }
    }

    .description {
      font-size: 1.5vw;
      text-align: left;
      font-family: 'Lato', sans-serif;
      font-weight: 300;
      margin-bottom: 4vw;
      max-width: 75%;
      @media (max-width: 860px) { 
        font-size: 6vw;
        position: relative;
        bottom: 24px;
      };
    }
  }
`;

export const CallToAction = styled.button`
  padding: 16px 16px;
  border-radius: 40px;
  border:none;
  font-size: 1.2vw;
  background-color: white;
  width: 75%;
  color: ${({theme}) => theme.colors.primary};
  @media (max-width: 860px) {
    width: 90%;
    font-size: 4vw;
    padding: 16px 24px;
    margin-bottom: 20%;
  };
`;