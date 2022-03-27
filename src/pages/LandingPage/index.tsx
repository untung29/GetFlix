import React from 'react';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export default () => {
  const LandingCover = styled.div`
    background-image: url('./images/cover.jpg');
    background-position: center;
    background-size: cover;
    height: 100vh;
    display: flex;
  `;

  const Logo = styled.h1`
    color: #ff0404;
    font-size: 4rem;
    margin-left: 1rem;
    margin-top: 0.5rem;
    font-family: 'Helvetica';
    /* position: absolute; */
  `;

  const H2Text = styled.h2`
    text-align: center;
    color: white;
    font-family: 'Helvetica';
    font-size: 3rem;
    width: 50%;
  `;

  const MiddleContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  return (
    <LandingCover>
      <Logo>Getflix</Logo>
      <MiddleContainer>
        <H2Text>Get unlimited information about your favorite movies, and more.</H2Text>
        <TextField
          label="Movie name"
          variant="filled"
          style={{
            backgroundColor: 'white',
            width: '25%',
          }}
          InputProps={{ disableUnderline: true }}
        />
      </MiddleContainer>
    </LandingCover>
  );
};
