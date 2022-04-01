import React from 'react';
import styled from '@emotion/styled';

// Components
import useGetMovies from 'hooks/useGetMovies';
import Logo from 'components/Logo';
import TextInput from 'components/TextInput';
import LandingCover from 'components/LandingCover';

export default () => {
  const data = useGetMovies('we');
  console.log(data);

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
        <TextInput label="Movie name" isLanding />
      </MiddleContainer>
    </LandingCover>
  );
};
