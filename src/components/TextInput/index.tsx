import { TextField } from '@mui/material';
import React, { ReactElement } from 'react';

const TextInput = ({ label, isLanding }: { label: string; isLanding: boolean }): ReactElement => (
  <TextField
    label={label}
    variant="filled"
    style={{
      backgroundColor: 'white',
      width: isLanding ? '25%' : '10%',
      borderRadius: '1rem',
    }}
    InputProps={{ disableUnderline: true }}
  />
);

export default TextInput;
