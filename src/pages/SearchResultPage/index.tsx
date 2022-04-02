import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import CustomCard from 'components/Card';
import Logo from 'components/Logo';
import TextInput from 'components/TextInput';
import useGetMovies from 'hooks/useGetMovies';
import React, { useState } from 'react';
import { SearchResultContainer, TopContainer } from './SearchResultPage.styled';

const SearchResultPage = () => {
  const [title, setTitle] = useState('');

  const onSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const data = useGetMovies('Twilight');
  console.log(data);

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
        <TextInput key="1" value={title} onChange={onSetTitle} onEnter={onSearchTitle} label="Search your movie" isLanding={false} />
      </TopContainer>
      <Grid container spacing={2} xs={12}>
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </Grid>
    </SearchResultContainer>
  );
};

export default SearchResultPage;
