import React, { useContext } from 'react';
import { BlogContext } from '../contexts/BlogContext';
import Box from "@mui/material/Box";
import loadingGif from "../assets/loading.gif";
import BlogForm from './BlogForm';

const BlockCard = () => {

  const { bloglist, isLoading } = useContext(BlogContext);
  console.log(bloglist)
  return (
    <>
      {isLoading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <img src={loadingGif} alt="gif" width="90%" height="800px" />
        </Box>
      )}
      {!isLoading && (
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {bloglist?.map((item, index) => (     
            <BlogForm  index={index} item= {item}/> 
          ))}
        </Box>
      )}
    </>
  )
}

export default BlockCard