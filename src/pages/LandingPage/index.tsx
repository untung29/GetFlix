import React, { useState } from 'react';
import styled from '@emotion/styled';

// Components
import Logo from 'components/Logo';
import TextInput from 'components/TextInput';
import LandingCover from 'components/LandingCover';
import { useNavigate } from 'react-router-dom';

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

  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const onSetTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(123);
    setTitle(e.target.value);
  };

  const onSearchTitle = () => {
    navigate({ pathname: '/search', search: `?t=${title}` });
  };

  return (
    <LandingCover>
      <Logo>Getflix</Logo>
      <Container>
        <MiddleContainer>
          <H2Text>Get unlimited information about your favorite movies, and more.</H2Text>
          <TextInput value={title} label="Movie name" isLanding onEnter={onSearchTitle} onChange={onSetTitle} />
        </MiddleContainer>
      </Container>
    </LandingCover>
  );
};
