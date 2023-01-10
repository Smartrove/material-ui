import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { DateRangePicker, DateRange } from "@mui/x-date-pickers-pro";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const MuiDateRangePicker = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  console.log(value);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box width="500px">
        <DateRangePicker
          startText="Starting Date"
          endText="Ending Date"
          value={value}
          onChange={(newValue: any) => setValue(newValue)}
          renderInput={(startProps: any, endProps: any) => (
            <>
              <TextField {...startProps} />
              <Box>To</Box>
              <TextField {...endProps} />
            </>
          )}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default MuiDateRangePicker;
