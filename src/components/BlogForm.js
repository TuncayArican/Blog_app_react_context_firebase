import React, { useContext } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../contexts/AuthContext";

const BlogForm = ({item, index}) => {
  console.log(item);
  const navigate = useNavigate();

  return (
    <div>
      <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
              <CardMedia
                component="img"
                height="250"
                image={item.imageUrl}
                alt="img"
              />
              <CardContent>

              <Typography gutterBottom variant="body2" component="div">
                  {item.user}
                </Typography> 
              
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
  
                <Typography variant="body2" color="text.secondary">
                  {item.content}
                </Typography>
              </CardContent>
              <Button onClick={() =>
              navigate(`details/${item.id}`, { state: item, replace: false })
            } >
                  Details
              </Button>
            </Card>

    </div>
  )
}

export default BlogForm