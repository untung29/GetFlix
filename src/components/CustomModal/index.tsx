import React, { ReactElement } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import useGetMovieById from 'hooks/useGetMovieById';
import { CardMedia, CircularProgress } from '@mui/material';
import NoPoster from '../../images/no-poster.png';
import { centeredComponent, modalStyle, textColor, textSpace } from './CustomModal.styles';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  imdbId: string;
}

const CustomModal = ({ isOpen, handleClose, imdbId }: ModalProps): ReactElement => {
  const { movieDetail, isLoading } = useGetMovieById(imdbId);

  return (
    <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
      <Fade in={isOpen}>
        <Box sx={modalStyle}>
          {isLoading ? (
            <Box sx={centeredComponent}>
              <CircularProgress color="inherit" />
            </Box>
          ) : (
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">
                  {`${movieDetail?.Title}`}
                </Typography>
                <Typography variant="h6">
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

              <Typography sx={textColor}>Plot</Typography>
              <Typography>{movieDetail?.Plot}</Typography>

              <Typography sx={{ ...textColor, ...textSpace }}>Genre</Typography>
              <Typography>{movieDetail?.Genre}</Typography>

              <Typography sx={{ ...textColor, ...textSpace }}>Cast</Typography>
              <Typography> {movieDetail?.Actors}</Typography>

              <Typography sx={{ ...textColor, ...textSpace }}>Release Date</Typography>
              <Typography>{movieDetail?.Released}</Typography>

              <Typography sx={{ ...textColor, ...textSpace }}>Awards</Typography>
              <Typography>{movieDetail?.Awards}</Typography>

              <Typography sx={{ ...textColor, ...textSpace }}>IMDB Rating</Typography>
              <Typography>{movieDetail?.imdbRating}</Typography>
            </Box>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
