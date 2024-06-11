// PATH: src/components/ErrorScreen.jsx

import React from 'react';
import { Typography, Button } from '@mui/material';

const ErrorScreen = ({ message }) => {
  return (
    <div>
      <Typography color="error">{message}</Typography>
      <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
        Go Back
      </Button>
    </div>
  );
};

export default ErrorScreen;
