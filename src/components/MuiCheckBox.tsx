import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckBox = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  console.log(acceptTerms);
  const [value, setValue] = useState<string[]>([]);
  console.log(value);
  const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTerms(event.target.checked);
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
      <Box>
        <FormControlLabel
          label="I accept the terms and conditions"
          control={
            <Checkbox checked={acceptTerms} onChange={handleTermsChange} />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTerms}
          onChange={handleTermsChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={value.includes("html")}
                  onChange={handleValueChange}
                />
              }
              label="HTML"
              value="html"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={value.includes("css")}
                  onChange={handleValueChange}
                />
              }
              label="CSS"
              value="css"
            />
            <FormControlLabel
              control={
                <Checkbox
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

export default MuiCheckBox;
