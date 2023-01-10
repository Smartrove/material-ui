import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
const MuiCard = () => {
  return (
    <Box width="200px">
      <Card sx={{ marginTop: "10px" }}>
        <CardMedia
          sx={{ borderRadius: "50%" }}
          component="img"
          height="50px"
          image="https://source.unsplash.com/random"
        />
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            React
          </Typography>
          <Typography variant="body2" color="success.dark">
            React is a Javascript library, with redux and nextjs, it becomes a
            framework
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined">Share</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
