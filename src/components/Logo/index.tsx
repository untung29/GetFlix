import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const LogoStyle = styled.h1`
  color: #ff0404;
  font-size: 3.5rem;
  @media (max-width: 768px) {
    font-size: 3rem;
    margin: 0;
  }
  display: inline;
`;

export const Logo = ({ children }: { children: React.ReactChildren | string }) => (
  <Link to="/">
    <LogoStyle>{children}</LogoStyle>
    <Typography variant="h6">Untung</Typography>
  </Link>
);

export default Logo;
