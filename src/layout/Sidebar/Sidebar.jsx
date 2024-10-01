import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";

import { Link } from "react-router-dom";

const Sidebar = ({ open }) => {
  return (
    <Box>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            top: "64px",
            border: "none",
            paddingLeft: "10px",
          },
        }}
      >
        <List>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <ListItem button sx={{ borderRadius: "15px" }}>
              <ListItemIcon>
                <HomeIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ color: "black" }} />
            </ListItem>
          </Link>
          <ListItem button sx={{ borderRadius: "15px" }}>
            <ListItemIcon>
              <SubscriptionsIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Subscriptions" sx={{ color: "black" }} />
          </ListItem>
          <ListItem button sx={{ borderRadius: "15px" }}>
            <ListItemIcon>
              <VideoLibraryIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Library" sx={{ color: "black" }} />
          </ListItem>
          <ListItem button sx={{ borderRadius: "15px" }}>
            <ListItemIcon>
              <HistoryIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="History" sx={{ color: "black" }} />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
