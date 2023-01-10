import React from "react";
import { Box, Stack, Grid } from "@mui/material";

const MuiLayout = () => {
  return (
    <>
      <Stack
        direction="row"
        spacing={5}
        sx={{
          border: "1px solid",
          margin: "5px",
          display: "flex",
          padding: "5px",
        }}
      >
        {/* <Box
        sx={{
          backgroundColor: "secondary.main",
          color: "white",
          padding: "16px",
          width: "100px",
          height: "100px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
        >
        MuiLayout
      </Box>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          color: "white",
          padding: "16px",
          width: "100px",
          height: "100px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        MuiLayout
      </Box> */}
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="primary.light" p={2}>
              Lorem, ipsum dolor.
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="primary.light" p={2}>
              Lorem, ipsum dolor.
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="primary.light" p={2}>
              Lorem, ipsum dolor.
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="primary.light" p={2}>
              Lorem, ipsum dolor.
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default MuiLayout;
