import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="share" />
      <SpeedDialAction icon={<ContentCopyIcon />} tooltipTitle="copy" />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
