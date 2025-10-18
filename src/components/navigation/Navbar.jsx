import React, { useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.to} disablePadding>
            <NavLink
              to={item.to}
              style={({ isActive }) => ({
                textDecoration: "none",
                width: "100%",
                color: isActive ? "blue" : "white",
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
        position="fixed"
        elevation={1}
        sx={{
          backdropFilter: "blur(5rem)",
          backgroundColor: "transparent",
          color: "aquamarine",
        }}
      >
        <Toolbar>
          {/* Mobile Hamburger Menu */}
          <IconButton
            edge="start"
            sx={{ display: { xs: "block", sm: "none" }, mr: 2 }}
            onClick={toggleDrawer}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontSize: "2rem",
              fontWeight: "bold",
              background: "linear-gradient(red,yellow , aquamarine , aquamarine)",
              WebkitBackgroundClip: "text", // important for gradient text
              WebkitTextFillColor: "transparent", // make text color transparent
              letterSpacing: "0.2rem",
            }}
          >
            VPS
          </Typography>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navLinks.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                sx={{
                  mx: 1,
                  textTransform: "none",
                  color: "white",
                  "&.active": { color: "aquamarine", fontWeight: "bold" },
                  "&:hover": {
                    color: "blue",
                    backgroundColor: "rgba(0,0,0,0.05)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>

      {/* Add top padding so content is not hidden behind AppBar */}
      <Box sx={{ pt: 8 }} />
    </>
  );
};
