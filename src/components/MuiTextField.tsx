import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing="4">
      <Stack direction="row" spacing={2}>
        <TextField label="name" variant="outlined" />
        <br />
        <TextField label="name" variant="filled" />
        <br />
        <TextField label="name" variant="standard" />
        <br />
      </Stack>

      <Stack spacing={3} direction="row">
        <TextField
          label="Password"
          color="primary"
          type="password"
          value={value}
          error={!value}
          onChange={(e) => setValue(e.target.value)}
          required
          helperText={
            !value
              ? "enter the required field"
              : "do not share your password with anyone"
          }
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
