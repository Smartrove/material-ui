import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

const MuiRadioButton = () => {
  const [radio, setRadio] = useState("");
  console.log({ radio });
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(event.target.value as string);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={radio}
          onChange={handleRadioChange}
        >
          <FormControlLabel control={<Radio />} value="0-2" label="0 - 2" />
          <FormControlLabel control={<Radio />} value="3-5" label="3 - 5" />
          <FormControlLabel control={<Radio />} value="6-10" label="6 - 10" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
