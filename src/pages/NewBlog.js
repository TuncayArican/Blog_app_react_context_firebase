import React, { useContext } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../contexts/BlogContext';


const NewBlog = () => {

  const navigate = useNavigate();

  const { AddUser, setInfo, info} = useContext(BlogContext);


  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name,value)
    console.log("merhaba")
    setInfo({ ...info, [name]: value });
  };

  const handleAdd= () => {
    AddUser(info)
    navigate('/'); 
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
        
        <Typography variant="h4" component="h1" sx={{ m: 4 }}>
         Add New Blog
        </Typography>

        <form>
          <Grid container spacing={4}>

          <Grid item xs={12}>
              <TextField
                id="imageUrl"
                label="imageUrl"
                name="imageUrl"
                variant="outlined"
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
             id="title"
             label="title"
             name="title"
             onChange={handleChange}
              fullWidth
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                id="content"
                label="content"
                name="content"
                variant="outlined"
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAdd}
                fullWidth
              >
                Add New Blog
              </Button>
            </Grid>

          </Grid>
        </form>
      </Box>
    </Container>
  )
}

export default NewBlog