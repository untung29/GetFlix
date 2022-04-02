import styled from '@emotion/styled';
import Logo from 'components/Logo';
import TextInput from 'components/TextInput';
import React from 'react';

const SearchResultPage = () => {
  const SearchResultContainer = styled.div`
    background-color: #5a0019;
    height: 100vh;
  `;
  const TopContainer = styled.div`
    display: flex;
    justify-content: space-around;
  `;

  return (
    <SearchResultContainer>
      <TopContainer>
        <div>
          <Logo>Getflix</Logo>
        </div>
        <TextInput label="Search your movie" isLanding={false} />
      </TopContainer>
    </SearchResultContainer>
  );
};

export default SearchResultPage;
