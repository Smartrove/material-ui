import React, { useState, forwardRef } from "react";
import { Button, Snackbar, Alert, AlertProps } from "@mui/material";

const SnackBarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackBarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="form submitted successfully..."
        autoHideDuration={5000}
        open={open}
        onClose={handleClose}
      /> */}
      <Snackbar autoHideDuration={5000} open={open} onClose={handleClose}>
        <SnackBarAlert onClose={handleClose} severity="success">
          form submitted successfully...
        </SnackBarAlert>
      </Snackbar>
    </>
  );
};

export default MuiSnackbar;
