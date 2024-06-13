// PATH: src/components/DownloadButton.jsx

import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const DownloadButton = ({ fileUrl }) => {
  const handleDownload = () => {
    window.open(fileUrl);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleDownload}>
      Download
    </Button>
  );
};

// Props validation 
DownloadButton.propTypes = {
  fileUrl: PropTypes.string.isRequired,
};

export default DownloadButton;
