import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';

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
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            top: '64px',
            border:'none',
            paddingLeft:'10px'
          },
        }}
      >
        <List>
          <ListItem button sx={{borderRadius:'15px'}}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button sx={{borderRadius:'15px'}}>
            <ListItemIcon><SubscriptionsIcon /></ListItemIcon>
            <ListItemText primary="Subscriptions" />
          </ListItem>
          <ListItem button sx={{borderRadius:'15px'}}>
            <ListItemIcon><VideoLibraryIcon /></ListItemIcon>
            <ListItemText primary="Library" />
          </ListItem>
          <ListItem button sx={{borderRadius:'15px'}}>
            <ListItemIcon><HistoryIcon /></ListItemIcon>
            <ListItemText primary="History" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
