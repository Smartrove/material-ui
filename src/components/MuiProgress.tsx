import React from "react";
import { Stack, CircularProgress, LinearProgress } from "@mui/material";

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      \
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress color="success" variant="determinate" />
      <LinearProgress
        color="success"
        variant="determinate"
        value={60}
        sx={{ height: "8px" }}
      />
    </Stack>
  );
};

export default MuiProgress;
