import React, { useContext } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate, useLocation } from "react-router-dom";
import { BlogContext } from '../contexts/BlogContext';
import { AuthContext } from "../contexts/AuthContext";


const Details = ({index }) => {
  const navigate = useNavigate();
  const { DeleteUser} = useContext(BlogContext);

    const { currentUser } = useContext(AuthContext);
  const user = currentUser?.email
  const { state } = useLocation();
  console.log(state);


  const handleDelete= (id) => {
    DeleteUser(id)
    navigate('/');     
   };


  return (
    <Box
      xs={{ d: "flex" }}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      flexWrap="wrap"
    >
      <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
        <CardMedia
          component="img"
          height="250"
          image={state.imageUrl}
          alt="img"
        />
        <CardContent>

        <Typography variant="body2" color="text.secondary">
            {state.user}
          </Typography>
          <br />
          <Typography gutterBottom variant="h5" component="div">
            {state.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {state.content}
          </Typography>
        </CardContent>
        <Button onClick={()=> handleDelete(state.id)}>
          Delete
        </Button>
        <Button onClick={() =>
              navigate(`/update-blog/${state.id}`, { state: state, replace: false })
            }>
          Update
        </Button>
      </Card>
    </Box>
  );
};

export default Details;
