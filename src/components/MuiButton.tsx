import React from "react";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

const MuiButton = () => {
  const [format, setFormats] = useState<string | null>(null);
  console.log(format);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      {/* <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="warning" endIcon={<SendIcon />}>
          primary
        </Button>
        <Button variant="contained" color="info">
          primary
        </Button>
        <Button variant="contained" color="success" startIcon={<SendIcon />}>
          primary
        </Button>

        <Stack>
          <IconButton aria-label="send" color="error" size="large">
            <SendIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant="contained" arial-label="alignment button group">
          <Button>Send</Button>
          <Button>Send</Button>
          <Button>Send</Button>
        </ButtonGroup>
      </Stack> */}

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={format}
          onChange={handleFormatChange}
          color="secondary"
          exclusive
        >
          <ToggleButton value="bold" arial-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" arial-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="outlined" arial-label="outlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
