import React, { useEffect, useState } from 'react';
import CustomModal from 'components/CustomModal';
import { CircularProgress, Grid } from '@mui/material';
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
  const [selectedImdbId, setSelectedImdbId] = useState('');

  const [openDetailModal, setOpenDetailModal] = useState(false);
  const navigate = useNavigate();
  const onSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onCloseDetailModal = () => {
    setOpenDetailModal(false);
  };

  const onOpenDetailModal = (id: string) => {
    setOpenDetailModal(true);
    setSelectedImdbId(id);
  };

  const { data, fetching, isLoading } = useGetMovies(searchParams.get('t'));

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
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress color="info" />
          </Box>
        ) : (
          <Grid container spacing={2}>
            {data?.map(movie => (
              <Grid item lg={2} md={3} sm={6} xs={12}>
                <CustomCard
                  onOpenDetailModal={onOpenDetailModal}
                  poster={movie.Poster}
                  title={movie.Title}
                  type={movie.Type}
                  year={movie.Year}
                  imdbId={movie.imdbID}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      <CustomModal imdbId={selectedImdbId} isOpen={openDetailModal} handleClose={onCloseDetailModal} />
    </SearchResultContainer>
  );
};

export default SearchResultPage;
