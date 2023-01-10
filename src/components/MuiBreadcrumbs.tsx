import React from "react";
import { Box, Link, Typography, Breadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MuiBreadcrumbs = () => {
  return (
    <Box m={4}>
      <Breadcrumbs arial-label="breadcrumb" separator={<NavigateNextIcon />}>
        <Link underline="none" href="#">
          Home
        </Link>
        <Link underline="none" href="#">
          Products
        </Link>
        <Link underline="none" href="#">
          About
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;
