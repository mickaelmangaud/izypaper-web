import React from 'react';
import { PageWrapper } from '../styled';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
  from {transform: translateX(10px);}
    to {transform: translateX(1350px);}
`;

const Wrap404 = styled(PageWrapper)`
  padding: 0;

  .background {
    height: 100%;
    width: 100%;
    position: relative;
    background: linear-gradient(180deg, rgba(4,139,154,1) 0%, rgba(255,255,255,1) 100%);
    background-size: 100% 100%;
  }

  .clouds {
    width: 200x;
    height: 300px;
    position: absolute;
  }

  .cloud1 {
    top: 80px;
    z-index: 100;
    fill: #eee;
    animation: ${move} 20s linear infinite;
  }

  .cloud2 {
    top: 240px;
    z-index: 200;
    fill: #eee;
    animation: ${move} 35s linear 10s infinite backwards;
  }

`;

export const Page404 = () => {
  return (
    <Wrap404>
        <div className="background">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            className="clouds cloud2"
            viewBox="0 0 512 512"
          >
            <path d="M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05-36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25-.01-35.82-23.49-66.16-55.91-76.47z"></path>
          </svg>
        </div>
    </Wrap404>
  )
};

export default Page404;