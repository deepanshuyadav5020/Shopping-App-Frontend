import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const handleLogin = () => {
    axios
      .post("http://54.68.113.86:5000/api/user/login", {
        email: user,
        password: password,
      })
      .then((response) => {
        if (response.status == 200) {
          navigate("/Home");
        }
      });
  };
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              onChange={(e) => {
                setUser(e.target.value);
              }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button onClick={handleLogin}>Sign In</Button>
            <Typography>Create a new Account</Typography>
            <Button>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                Register
              </NavLink>
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
