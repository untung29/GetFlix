import { IconButton, TextField } from '@mui/material';
import React, { ReactElement } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import textInputStyle from './TextInput.styles';

interface TextInputProps {
  label: string;
  isLanding: boolean;
  onEnter: () => void;
  onChange: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const TextInput = ({ value, label, isLanding, onEnter, onChange }: TextInputProps): ReactElement => (
  <TextField
    value={value}
    onChange={onChange}
    label={label}
    variant="filled"
    sx={textInputStyle.inputStyle}
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

export default TextInput;
