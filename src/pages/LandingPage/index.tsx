import React from 'react';
import styled from '@emotion/styled';

// Components
import Logo from 'components/Logo';
import TextInput from 'components/TextInput';
import LandingCover from 'components/LandingCover';

export default () => {
  const H2Text = styled.h2`
    text-align: center;
    color: white;
    font-family: 'Helvetica';
    font-size: 3rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  `;

  const MiddleContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 50%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
      width: 75%;
    }
  `;

  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `;

  return (
    <LandingCover>
      <Logo>Getflix</Logo>
      <Container>
        <MiddleContainer>
          <H2Text>Get unlimited information about your favorite movies, and more.</H2Text>
          <TextInput label="Movie name" isLanding />
        </MiddleContainer>
      </Container>
    </LandingCover>
  );
};
