import { IconButton, TextField } from '@mui/material';
import React, { ReactElement, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const TextInput = ({ label, isLanding }: { label: string; isLanding: boolean }): ReactElement => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');

  const onSetTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const onSearchTitle = () => {
    navigate({ pathname: '/search', search: `?t=${title}` });
  };

  return (
    <TextField
      onChange={onSetTitle}
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
          <IconButton onClick={onSearchTitle}>
            <SearchIcon />
          </IconButton>
        ),
      }}
      onKeyPress={(e): void => {
        if (e.key === 'Enter') {
          onSearchTitle();
        }
      }}
    />
  );
};

export default TextInput;
