import { IconButton, TextField } from '@mui/material';
import React, { ReactElement } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const TextInput = ({ label, isLanding }: { label: string; isLanding: boolean }): ReactElement => (
  <TextField
    label={label}
    variant="filled"
    style={{
      backgroundColor: 'white',
      borderRadius: '1rem',
    }}
    fullWidth={isLanding}
    InputProps={{
      disableUnderline: true,
      endAdornment: (
        <IconButton onClick={() => {}}>
          <SearchIcon />
        </IconButton>
      ),
    }}
  />
);

export default TextInput;
