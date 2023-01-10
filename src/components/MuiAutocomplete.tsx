import { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

const skills = ["html", "css", "js", "react", "typescript", "node"];

const MuiAutocomplete = () => {
  const [skill, setSkills] = useState<string | null>(null);
  console.log({ skill });
  const handleSkillsChange = (event: any, newValue: string | null) => {
    setSkills(newValue);
  };
  return (
    <Stack spacing={2} width="250px">
      {/* <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
      /> */}

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={skills}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={handleSkillsChange}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
