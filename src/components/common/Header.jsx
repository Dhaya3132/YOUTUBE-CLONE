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
          height: "64px", 
          minHeight: "64px", 
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton size="large" edge="start">
            <MenuIcon />
          </IconButton>
          <Box sx={{ ml: 2, display: "flex", alignItems: "center" }}>
            <img src={logo} alt="Example" width="140" height="140" />
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
