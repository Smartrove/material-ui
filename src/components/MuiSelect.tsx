import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";
const MuiSelect = () => {
  const [country, setCountry] = useState("");
  console.log(country);
  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };
  return (
    <Box width="250px">
      <TextField
        label="select country"
        select
        value={country}
        error={!country}
        helperText={!country ? "country is required" : country}
        color="secondary"
        onChange={handleCountryChange}
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="NG">Nigeria</MenuItem>
        <MenuItem value="GH">Ghana</MenuItem>
        <MenuItem value="US">United States</MenuItem>
        <MenuItem value="AG">Argentina</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
