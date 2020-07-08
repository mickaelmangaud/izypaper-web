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

export const HeroSection = styled.section`
  padding: 10%;
  display: flex;
  height: 100%;
  scroll-snap-align: start;

  .left {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: ${({theme}) => theme.sizes.menuHeight};

      @media (max-width: 860px) {
        display: none;
      }
      flex: 1;
      img { 
        width: 90%;
      }
    }

  .right {
    flex: 1;
    padding: 3% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: ${({theme}) => theme.sizes.menuHeight};
    
    h1 {
      font-size: 6vw;
      margin-bottom: 36px;
      @media (max-width: 860px) {
        font-size: 16vw;
      }
    }

    .description {
      font-size: 2vw;
      font-family: 'Lato', sans-serif;
      font-weight: 300;
      line-height: 2.5vw;
      margin-bottom: 4vw;
      @media (max-width: 860px) {
        font-size: 6vw;
        line-height: 7vw;
      }
    }
  }
`;

export const CallToAction = styled.button`
  padding: 16px 24px;
  border-radius: 40px;
  border:none;
  font-size: 1.5vw;
  color: ${({theme}) => theme.colors.primary};
`;