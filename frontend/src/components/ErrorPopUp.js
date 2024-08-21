import React from 'react';
import { Snackbar, Alert, Button } from '@mui/material';

export function ErrorPopup({ open, message, onClose }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      action={
        <Button color="inherit" onClick={onClose}>
          Close
        </Button>
      }
    >
      <Alert onClose={onClose} severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
}
