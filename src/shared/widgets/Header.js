import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink} from 'react-router-dom';

export  function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          C H E A T K A R T &nbsp;
          <NavLink style={{ textDecoration: "none"}} to="/"> Home</NavLink>
          </Typography>

          <Button color="inherit">My Cart</Button>
          <Button ><NavLink style={{ textDecoration: "none"}}to="/login">Login</NavLink> </Button>
          <Typography>/</Typography>
          <NavLink style={{ textDecoration: "none"}}to="/register"><Button color="inherit">Register</Button></NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}