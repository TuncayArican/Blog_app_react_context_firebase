import { useEffect, useState, useContext } from "react";
import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";

import { signup, loginWithGoogle } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {

    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  console.log("merhaba")
  console.log(currentUser)

  const handleSingUp = () => {
    signup(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  const handleGoogleSingIn = () => {
    loginWithGoogle();
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          height: "100vh",
          marginTop: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="regiter_img"
          src="https://cdn.pixabay.com/photo/2014/02/04/13/17/register-257986_960_720.jpg"
          sx={{ width: 156, height: 156 }}
        />
        <Typography variant="h4" component="h1" sx={{ m: 4 }}>
          Register
        </Typography>

        <form>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="email"
                name="email"
                variant="outlined"
                type="email"
                value={email ?? ""}
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="password"
                name="password"
                variant="outlined"
                type="password"
                autoComplete="current-password"
                value={password ?? ""}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSingUp}
                fullWidth
              >
                Register
              </Button>
            </Grid>
            <Grid item xs={12}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleGoogleSingIn}
                fullWidth
              >
                CONTINUE WITH GOOGLE
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Register;