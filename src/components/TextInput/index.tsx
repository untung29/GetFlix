import { IconButton, TextField } from '@mui/material';
import React, { ReactElement } from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface TextInputProps {
  label: string;
  isLanding: boolean;
  onEnter: () => void;
  onChange: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const TextInput = ({ value, label, isLanding, onEnter, onChange }: TextInputProps): ReactElement => {
  console.log(value);
  return (
    <TextField
      autoFocus
      id="set-title"
      value={value}
      onChange={onChange}
      label={label}
      variant="filled"
      style={{ backgroundColor: 'white', borderRadius: '1rem', marginTop: '0.5rem' }}
      fullWidth={isLanding}
      InputProps={{
        disableUnderline: true,
        endAdornment: (
          <IconButton onClick={onEnter}>
            <SearchIcon />
          </IconButton>
        ),
      }}
      onKeyPress={(e): void => {
        if (e.key === 'Enter') {
          onEnter();
        }
      }}
    />
  );
};

export default TextInput;
