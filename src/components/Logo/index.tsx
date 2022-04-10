import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const LogoStyle = styled.h1`
  color: #ff0404;
  font-size: 3.5rem;
  /* margin-left: 1rem; */
  /* margin-top: 0.5rem; */
  font-family: 'Helvetica';
  @media (max-width: 768px) {
    font-size: 3rem;
    margin: 0;
  }
  display: inline;
`;

export const Logo = ({ children }: { children: React.ReactChildren }) => (
  <Link to="/">
    <LogoStyle>{children}</LogoStyle>
  </Link>
);

export default Logo;
