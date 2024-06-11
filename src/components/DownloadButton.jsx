// PATH: src/components/DownloadButton.jsx

import { Button } from '@mui/material';

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

export default DownloadButton;
