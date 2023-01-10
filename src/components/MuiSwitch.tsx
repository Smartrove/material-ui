import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";

const MuiSwitch = () => {
  const [mode, setMode] = useState(false);
  console.log({ mode });
  const [value, setValue] = useState<string[]>([]);
  console.log({ value });

  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.checked);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = value.indexOf(event.target.value);
    if (index === -1) {
      setValue([...value, event.target.value]);
    } else {
      setValue(value.filter((value) => value !== event.target.value));
    }
  };
  return (
    <Box>
      <FormControlLabel
        label="DarkMode"
        control={<Switch checked={mode} onChange={handleModeChange} />}
      />

      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={value.includes("html")}
                  onChange={handleValueChange}
                />
              }
              label="HTML"
              value="html"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={value.includes("css")}
                  onChange={handleValueChange}
                />
              }
              label="CSS"
              value="css"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={value.includes("javascript")}
                  onChange={handleValueChange}
                />
              }
              label="JAVASCRIPT"
              value="javascript"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiSwitch;
