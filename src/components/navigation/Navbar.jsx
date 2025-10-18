import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.to} disablePadding>
            <NavLink
              to={item.to}
              style={({ isActive }) => ({
                textDecoration: 'none',
                width: '100%',
                color: isActive ? 'blue' : 'black',
              })}
            >
              <ListItemText primary={item.label} sx={{ pl: 2, py: 1.5 }} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: 'transparent', color: 'black' }}
      >
        <Toolbar>
          {/* Mobile Menu Icon */}
          <IconButton
            edge="start"
            sx={{
              display: { xs: 'block', sm: 'none' },
              mr: 2,
              '&:hover': {
                color: 'blue',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
              },
            }}
            onClick={toggleDrawer}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            VPS
          </Typography>

          {/* Desktop Nav Buttons */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navLinks.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                sx={{
                  mx: 1,
                  color: 'inherit',
                  textTransform: 'none',
                  '&.active': {
                    color: 'blue',
                    fontWeight: 'bold',
                  },
                  '&:hover': {
                    color: 'blue',
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};
