import { useState, useContext} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { BlogContext } from '../contexts/BlogContext';

const UpdateBlog = () => {

  const navigate = useNavigate();
  const { state } = useLocation();

  const { UpdateUser} = useContext(BlogContext);

  
  const [info,setInfo]=useState(state)


  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name,value)
    console.log("merhaba")
    setInfo({ ...info, [name]: value });
  };

  const handleUser= () => {
    UpdateUser(info)
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
        Update the  Blog
        </Typography>

        <form>
          <Grid container spacing={4}>

          <Grid item xs={12}>
              <TextField
                id="imageUrl"
                label="imageUrl"
                name="imageUrl"
                value={info.imageUrl}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
             id="title"
             label="title"
             name="title"
             value={info.title}
             onChange={handleChange}
              fullWidth
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                id="content"
                label="content"
                name="content"
                
                value={info.content}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleUser}
                fullWidth
              >
                Update the  Blog
              </Button>
            </Grid>

          </Grid>
        </form>
      </Box>
    </Container>
  )
}

export default UpdateBlog