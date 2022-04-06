import React, { ReactElement } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import useGetMovieById from 'hooks/useGetMovieById';
import { CardMedia, CircularProgress } from '@mui/material';
import NoPoster from '../../images/no-poster.png';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  imdbId: string;
}

const CustomModal = ({ isOpen, handleClose, imdbId }: ModalProps): ReactElement => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxHeight: 450,
    '@media (max-width: 768px)': {
      width: '70%',
    },
    overflow: 'scroll',
  };

  const { movieDetail, isLoading } = useGetMovieById(imdbId);

  return (
    <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
      <Fade in={isOpen}>
        <Box sx={style}>
          {isLoading ? (
            <CircularProgress color="inherit" />
          ) : (
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                  {`${movieDetail?.Title} (${movieDetail?.Runtime})`}
                </Typography>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                  {movieDetail?.Year}
                </Typography>
              </Box>
              <hr />

              <CardMedia
                sx={{ maxWidth: 200, marginBottom: '1rem' }}
                component="img"
                height="250"
                image={movieDetail?.Poster === 'N/A' ? NoPoster : movieDetail?.Poster}
                alt={movieDetail?.Title}
              />

              <Typography sx={{ color: '#A8A8A8' }}>Plot</Typography>
              <Typography>{movieDetail?.Plot}</Typography>

              <Typography sx={{ color: '#A8A8A8', marginTop: '1rem' }}>Genre</Typography>
              <Typography>{movieDetail?.Genre}</Typography>

              <Typography sx={{ color: '#A8A8A8', marginTop: '1rem' }}>Cast</Typography>
              <Typography> {movieDetail?.Actors}</Typography>

              <Typography sx={{ color: '#A8A8A8', marginTop: '1rem' }}>Release Date</Typography>
              <Typography>{movieDetail?.Released}</Typography>

              <Typography sx={{ color: '#A8A8A8', marginTop: '1rem' }}>Awards</Typography>
              <Typography>{movieDetail?.Awards}</Typography>

              <Typography sx={{ color: '#A8A8A8', marginTop: '1rem' }}>IMDB Rating</Typography>
              <Typography>{movieDetail?.imdbRating}</Typography>
            </Box>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
