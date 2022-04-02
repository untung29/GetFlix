import styled from '@emotion/styled';
import Logo from 'components/Logo';
import TextInput from 'components/TextInput';
import React, { useState } from 'react';

const SearchResultPage = () => {
  const SearchResultContainer = styled.div`
    background-color: #5a0019;
    height: 100vh;
  `;
  const TopContainer = styled.div`
    display: flex;
    justify-content: space-around;
  `;
  const [title, setTitle] = useState('');

  const onSetTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  console.log(title);

  const onSearchTitle = () => {
    //
  };
  // const navigate = useNavigate();
  // const searchResults = useGetMovies();

  return (
    <SearchResultContainer>
      <TopContainer>
        <div>
          <Logo>Getflix</Logo>
        </div>
        <TextInput value={title} onChange={onSetTitle} onEnter={onSearchTitle} label="Search your movie" isLanding={false} />
      </TopContainer>
    </SearchResultContainer>
  );
};

export default SearchResultPage;
