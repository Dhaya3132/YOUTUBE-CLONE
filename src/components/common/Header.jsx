import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import SearchBar from "./Searchbar";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import logo from "../../assets/public/logo.svg";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: "#FFF", boxShadow: "none" }}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton size="large" edge="start">
            <MenuIcon />
          </IconButton>
          <Box>
            <img src={logo} alt="Example" width="120" height="100" />
          </Box>
        </Box>
        <Box>
          <SearchBar />
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
              display:'flex',
              alignItems:'center',
              '&:hover':{
                boxShadow:'none',
                backgroundColor:'#f5f5f5'
              },
              padding:"9px 15px"
            }}
          >
            <AccountCircleIcon sx={{ size: "md", marginRight:'4px' }} />
            <Typography variant="p" textTransform="none">Sign in</Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
