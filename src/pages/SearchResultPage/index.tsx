import React, { ReactNode, useEffect, useMemo, useState } from 'react';

// Components
import CustomModal from 'components/CustomModal';
import { CircularProgress, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import InfiniteScroll from 'react-infinite-scroll-component';
import CustomCard from 'components/CustomCard';
import Logo from 'components/Logo';
import TextInput from 'components/TextInput';

// Hooks
import useGetMovies from 'hooks/useGetMovies';
import { useNavigate, useSearchParams } from 'react-router-dom';

// Styles
import searchResultPageStyle from './SearchResultPage.styles';

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

  const { data, fetching, isLoading, hasNextPage, fetchNextPage, isFetching, totalData } = useGetMovies(searchParams.get('t'));
  const onSearchTitle = () => {
    navigate({ pathname: '/search', search: `?t=${title}` });
    fetching(true);
  };

  useEffect(() => {
    // If the query params t (title) is not empty then fetch data
    if (searchParams.get('t')) {
      // Set the title based on the params
      fetching(true);
    } else {
      // Do something
      // Return back the user to the page?
    }
  }, []);

  const movieList = useMemo<ReactNode>(() => {
    if (data?.pages[0]?.searchResults !== undefined) {
      return data?.pages.map(page =>
        page?.searchResults.map(movie => (
          <Grid item lg={2} md={3} sm={6} xs={12} key={movie.imdbID}>
            <CustomCard
              onOpenDetailModal={onOpenDetailModal}
              poster={movie?.Poster}
              title={movie?.Title}
              type={movie?.Type}
              year={movie?.Year}
              imdbId={movie?.imdbID}
            />
          </Grid>
        )),
      );
    }

    return [];
  }, [isFetching]);

  const searchResultRendering = (): ReactNode => {
    if (isLoading || (isFetching && totalData === 0)) {
      return (
        <Box sx={{ ...searchResultPageStyle.centeredPosition, ...searchResultPageStyle.fullHeight }}>
          <CircularProgress color="info" />
        </Box>
      );
    }
    if (totalData === 0) {
      return (
        <Typography variant="h5" sx={{ color: 'white' }}>
          No result found
        </Typography>
      );
    }

    return (
      <InfiniteScroll
        hasMore={hasNextPage}
        next={fetchNextPage}
        dataLength={totalData}
        loader={
          <Box sx={{ ...searchResultPageStyle.centeredPosition, ...searchResultPageStyle.scrollLoadingHeight }}>
            <CircularProgress color="info" />
          </Box>
        }
      >
        <Grid container spacing={2}>
          {movieList}
        </Grid>
      </InfiniteScroll>
    );
  };

  return (
    <Box sx={searchResultPageStyle.searchResultContainer}>
      <Box sx={searchResultPageStyle.topContainer}>
        <Box sx={searchResultPageStyle.logoPosition}>
          <Logo>Getflix</Logo>
        </Box>
        <TextInput key="1" value={title} onChange={onSetTitle} onEnter={onSearchTitle} label="Search your movie" isLanding={false} />
      </Box>

      <Box sx={{ padding: '1rem 3rem', color: 'white' }}>
        <Typography variant="h5">Search result for &quot;{searchParams.get('t')}&quot;</Typography>
      </Box>

      <Box sx={{ padding: '2rem 3rem' }}>{searchResultRendering()}</Box>
      <CustomModal imdbId={selectedImdbId} isOpen={openDetailModal} handleClose={onCloseDetailModal} />
    </Box>
  );
};

export default SearchResultPage;
