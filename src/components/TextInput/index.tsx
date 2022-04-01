import { TextField } from '@mui/material';
import React, { ReactElement } from 'react';

const TextInput = ({ label, isLanding }: { label: string; isLanding: boolean }): ReactElement => (
  <TextField
    label={label}
    variant="filled"
    style={{
      backgroundColor: 'white',
      borderRadius: '1rem',
    }}
    fullWidth={isLanding}
    InputProps={{ disableUnderline: true }}
  />
);

export default TextInput;
