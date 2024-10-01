import React from "react";
import logo from "../../assets/public/logo.svg";
import { Box, TextField, IconButton, AppBar, Toolbar, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

import { Link } from "react-router-dom";

const Header = ({toggleSidebar}) => {
  return (
    <AppBar sx={{ backgroundColor: "#FFF", boxShadow: "none" }}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
          minHeight: "64px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton size="large" edge="start" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ ml: 2, display: "flex", alignItems: "center" }}>
            <Link to="/"><img src={logo} alt="Example" width="140" height="140" /></Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            width: "600px",
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "50px",
              boxShadow: "none",
              border: "1px solid #ddd",
              width: "100%",
            }}
          >
            <TextField
              variant="standard"
              placeholder="Search"
              InputProps={{
                disableUnderline: true,
                sx: { borderRadius: "50px", paddingLeft: "15px" },
              }}
              sx={{ flex: 1 }}
            />

            <IconButton sx={{ padding: "10px" }}>
              <SearchIcon />
            </IconButton>
          </Box>

          <IconButton
            sx={{
              marginLeft: "10px",
              backgroundColor: "#f1f1f1",
              "&:hover": { backgroundColor: "#e0e0e0" },
              borderRadius: "50%",
            }}
          >
            <MicIcon />
          </IconButton>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              color: "#111",
              borderRadius: "50px",
              boxShadow: "none",
              display: "flex",
              alignItems: "center",
              padding: "6px 12px",
              "&:hover": {
                boxShadow: "none",
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <AccountCircleIcon sx={{ size: "md", marginRight: "4px" }} />
            <Typography variant="body1" textTransform="none">
              Sign in
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
