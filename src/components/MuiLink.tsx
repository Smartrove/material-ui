import { Stack, Link } from "@mui/material";
import React from "react";
const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link
        href="https://www.npmjs.com/package/react-hook-form-urlencoded"
        target="_blank"
      >
        Link
      </Link>
    </Stack>
  );
};

export default MuiLink;
