// PATH: src/components/ErrorScreen.jsx

import { Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';

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

// Props validation
ErrorScreen.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorScreen;
