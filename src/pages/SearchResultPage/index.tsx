import React, { useEffect, useState } from 'react';
import CustomModal from 'components/CustomModal';
import { CircularProgress, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import InfiniteScroll from 'react-infinite-scroll-component';

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

  const { data, fetching, isLoading, hasNextPage, fetchNextPage, isFetching } = useGetMovies(searchParams.get('t'));
  const onSearchTitle = () => {
    navigate({ pathname: '/search', search: `?t=${title}` });
    fetching(true);
  };

  useEffect(() => {
    if (searchParams.get('t')) {
      // Set the title based on the params
      fetching(true);
    }
  }, []);

  const totalData = data?.pages.reduce((acc, totalSearches) => {
    if (totalSearches) {
      return acc + totalSearches?.searchResults.length;
    }
    return acc;
  }, 0);

  console.log(isFetching);

  return (
    <SearchResultContainer>
      <TopContainer>
        <Box sx={{ display: 'inline-block' }}>
          <Logo>Getflix</Logo>
        </Box>
        <TextInput key="1" value={title} onChange={onSetTitle} onEnter={onSearchTitle} label="Search your movie" isLanding={false} />
      </TopContainer>
      <Box sx={{ padding: '2rem 3rem' }}>
        {isLoading || (isFetching && data?.pages.length === 0) ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress color="info" />
          </Box>
        ) : (
          <InfiniteScroll
            hasMore={hasNextPage}
            next={fetchNextPage}
            dataLength={totalData || 0}
            loader={
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
                <CircularProgress color="info" />
              </Box>
            }
            pullDownToRefreshThreshold={50}
          >
            <Grid container spacing={2}>
              {data?.pages.map(page =>
                page?.searchResults.map(movie => (
                  <Grid item lg={2} md={3} sm={6} xs={12}>
                    <CustomCard
                      onOpenDetailModal={onOpenDetailModal}
                      poster={movie?.Poster}
                      title={movie?.Title}
                      type={movie?.Type}
                      year={movie?.Year}
                      imdbId={movie?.imdbID}
                      key={movie?.Title}
                    />
                  </Grid>
                )),
              )}
            </Grid>
          </InfiniteScroll>
        )}
      </Box>
      <CustomModal imdbId={selectedImdbId} isOpen={openDetailModal} handleClose={onCloseDetailModal} />
    </SearchResultContainer>
  );
};

export default SearchResultPage;
