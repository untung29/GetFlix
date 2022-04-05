import React, { useEffect, useState } from 'react';
import CustomModal from 'components/CustomModal';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import CustomCard from 'components/CustomCard';
import Logo from 'components/Logo';
import TextInput from 'components/TextInput';
import useGetMovies from 'hooks/useGetMovies';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SearchResultContainer, TopContainer } from './SearchResultPage.styled';

const SearchResultPage = () => {
  const [title, setTitle] = useState('');
  const [searchParams] = useSearchParams();
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const navigate = useNavigate();
  const onSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onCloseDetailModal = () => {
    setOpenDetailModal(false);
  };

  const onOpenDetailModal = () => {
    setOpenDetailModal(true);
  };

  const { data, fetching } = useGetMovies(searchParams.get('t'));

  const onSearchTitle = () => {
    navigate({ pathname: '/search', search: `?t=${title}` });
    fetching(true);
  };

  useEffect(() => {
    if (searchParams.get('t')) {
      fetching(true);
    }
  }, []);

  return (
    <SearchResultContainer>
      <TopContainer>
        <Box sx={{ display: 'inline-block' }}>
          <Logo>Getflix</Logo>
        </Box>
        <TextInput key="1" value={title} onChange={onSetTitle} onEnter={onSearchTitle} label="Search your movie" isLanding={false} />
      </TopContainer>
      <Box sx={{ padding: '2rem 3rem' }}>
        <Grid container spacing={2}>
          {data?.map(movie => (
            <Grid item lg={2} md={3} sm={6} xs={12}>
              <CustomCard
                onOpenDetailModal={onOpenDetailModal}
                poster={movie.Poster}
                title={movie.Title}
                type={movie.Type}
                year={movie.Year}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <CustomModal isOpen={openDetailModal} handleClose={onCloseDetailModal} />
    </SearchResultContainer>
  );
};

export default SearchResultPage;
