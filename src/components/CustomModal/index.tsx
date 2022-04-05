import React, { ReactElement } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';

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
    maxHeight: 400,
    '@media (max-width: 768px)': {
      width: '70%',
    },
    overflow: 'scroll',
  };

  console.log(imdbId);

  return (
    <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
      <Fade in={isOpen}>
        <Box sx={style}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Twilight (136 min)
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              2008
            </Typography>
          </Box>
          <hr />
          <Typography id="transition-modal-description" sx={{ color: '#A8A8A8' }}>
            Plot
          </Typography>
          <Typography>
            The Guardians struggle to keep together as a team while dealing with their personal family issues, notably encounter with his
            father the ambitious celestial being Ego.
          </Typography>

          <Typography id="transition-modal-description" sx={{ color: '#A8A8A8', marginTop: '1rem' }}>
            Genre
          </Typography>
          <Typography>Action, Adventure, Comedy</Typography>

          <Typography id="transition-modal-description" sx={{ color: '#A8A8A8', marginTop: '1rem' }}>
            Cast
          </Typography>
          <Typography>Robert Pattinson, Kristen Stewart</Typography>

          <Typography id="transition-modal-description" sx={{ color: '#A8A8A8', marginTop: '1rem' }}>
            Release Date
          </Typography>
          <Typography>01 January 2018</Typography>

          <Typography id="transition-modal-description" sx={{ color: '#A8A8A8', marginTop: '1rem' }}>
            Awards
          </Typography>
          <Typography>Nominated for 1 Oscar. 15 wins & 59 nominations total</Typography>

          <Typography id="transition-modal-description" sx={{ color: '#A8A8A8', marginTop: '1rem' }}>
            IMDB Rating
          </Typography>
          <Typography>7.6</Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
