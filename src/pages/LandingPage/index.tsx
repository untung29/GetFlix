import React, { useState } from 'react';

// Components
import Logo from 'components/Logo';
import TextInput from 'components/TextInput';
import LandingCover from 'components/LandingCover';
import { useNavigate } from 'react-router-dom';
import { Container, H2Text, MiddleContainer } from './LandingPage.styled';

export default () => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const onSetTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
