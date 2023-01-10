import React, { useState } from "react";
import { Box, Stack, Rating } from "@mui/material";
const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log({ value });
  const handleValueChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating value={value} onChange={handleValueChange} precision={0.5} />
    </Stack>
  );
};

export default MuiRating;
