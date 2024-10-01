import React from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        width:'600px'
      }}
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '50px',
          boxShadow: 'none',
          border: '1px solid #ddd',
          width:'100%'
        }}
      >
        <TextField
          variant="standard"
          placeholder="Search"
          InputProps={{
            disableUnderline: true,
            sx: { borderRadius: '50px', paddingLeft: '15px' }, 
          }}
          sx={{ flex: 1 }} 
        />

        <IconButton sx={{ padding: '10px' }}>
          <SearchIcon />
        </IconButton>
      </Box>
      
      <IconButton
        sx={{
          marginLeft: '10px',
          backgroundColor: '#f1f1f1',
          '&:hover': { backgroundColor: '#e0e0e0' },
          borderRadius: '50%',
        }}
      >
        <MicIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
